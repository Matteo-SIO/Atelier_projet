import {verifyToken} from "../utils/SessionUtil.ts";
import Tables from "../database/Tables.ts";

export default (server, BASE_PATH) => {

    /**
     * @api {GET} /api/incidents/ List all the incidents
     * @apiPermission manager, employee (only his own incidents)
     * @apiParam {Number} [offset=0] Pagination offset
     * @apiParam {Number} [limit=20] Pagination limit
     */
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        // pagination, get lines from [offset]° to [offset + limit]°
        // example: get [0, 20]° lines, then [20, 40]° lines, etc...
        let offsetQuery = Number(request.query.offset ?? 0);
        let limitQuery = Number(request.query.limit ?? 20);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let incidents = await Tables.Incident.findAll({
            where: {
                ...(decodedToken.role !== 'manager') ? {id_user: decodedToken.id} : {}
                // If not manager, only get incidents where user_id === decodedToken.id
            },
            offset: offsetQuery,
            limit: limitQuery,
        });

        reply.code(200);
        reply.send(incidents);
    });


    /**
     * @api {GET} /api/incidents/:id Get an incident by id
     * @apiPermission manager, employee (only his own incidents)
     */
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let incident = await Tables.Incident.findOne({
            where: {
                id: request.params.id,
                ...(decodedToken.role !== 'manager') ? {id_user: decodedToken.id} : {}
            },
        });

        if (!incident) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        reply.code(200);
        reply.send(incident);
    })


    /**
     * @api {POST} /api/incidents/ Create an incident
     * @apiPermission manager, employee
     * @apiParam {Number} id_material
     * @apiParam {String} description
     */
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        try {
            let incident = await Tables.Incident.create({
                id_user: decodedToken.id,
                id_material: request.body.id_material,
                description: request.body.description
            });

            reply.code(201);
            reply.send(incident);
        } catch (e) {
            reply.code(400);
            reply.send({error: 'Bad Request'});
        }


    });


    /**
     * @api {PUT} /api/incidents/:id/state Change the state of an incident
     * @apiPermission manager, employee (only his own incidents)
     * @apiParam {String} state
     */
    server.put(BASE_PATH + '/:id/state', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        // only manager can change state
        // otherwise, users can only close their own incidents

        if (decodedToken.role !== 'manager' && request.body.state !== 'CLOSED') {
            // Cannot change state to anything else than CLOSED if not manager
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let res = await Tables.Incident.update({state: request.body.state}, {
            where: {
                id: request.params.id,
                ...(decodedToken.role !== 'manager' ? {user_id: decodedToken.id} : {})
                // If not manager, only update if user_id === decodedToken.id
            }
        });

        if (res[0] === 0) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        reply.code(200);
        reply.send({success: true});
    });

    // No delete, we keep as logs

}