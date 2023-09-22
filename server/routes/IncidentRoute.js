import {verifyToken} from "../../utils/SessionUtil.js";
import Tables from "../../database/Tables.js";

export default (server, BASE_PATH) => {

    // List all the incidents
    // require role 'manager' for all incidents
    // Or user_id === decodedToken.id for user's incidents
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

    // Get an incident by id
    // require role 'manager'
    // Or, require user_id === decodedToken.id

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

    // Create an incident
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let incident = await Tables.Incident.create({
            id_user: decodedToken.id,
            id_material: request.body.id_material,
            description: request.body.description
        });

        reply.code(201);
        reply.send(incident);
    });

    // Change the state of an incident
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