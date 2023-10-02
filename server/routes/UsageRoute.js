import {verifyToken} from "../../utils/SessionUtil.js";
import Tables from "../../database/Tables.js";

export default (server, BASE_PATH) => {

    /**
     * @api {GET} /api/usages/ List all the usages
     * @apiPermission manager, employee (only his own usages)
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

        let usages = await Tables.Usage.findAll({
            where: {
                ...(decodedToken.role !== 'manager') ? {id_user: decodedToken.id} : {}
                // If not manager, only get usages where user_id === decodedToken.id
            },
            offset: offsetQuery,
            limit: limitQuery,
            include: { all: true, nested: true }
        });

        reply.code(200);
        reply.send(usages);
    });

    /**
     * @api {GET} /api/usages/:id Get an usage by id
     * @apiPermission manager, employee (only his own usages)
     */
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let isManager = decodedToken.role === 'manager';

        let usage = await Tables.Usage.findOne({
            where: {
                id: request.params.id,
                ...(!isManager) ? {id_user: decodedToken.id} : {}
            }
        });

        if (!usage) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        reply.code(200);
        reply.send(usage);
    });

    /**
     * @api {POST} /api/usages/ Create a usage
     * @apiPermission manager, employee
     * @apiParam {Number} id_material
     * @apiParam {Date} date_start
     * @apiParam {Date} date_end
     * @apiParam {String} [state=open]
     */
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let usage = await Tables.Usage.create({
            id_user: decodedToken.id,
            id_material: request.body.id_material,
            date_start: request.body.date_start,
            date_end: request.body.date_end
        });

        reply.code(201);
        reply.send(usage);
    })

    /**
     * @api {PUT} /api/usages/:id/state Update the state of a usage
     * @apiPermission manager, employee (only his own usages)
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
        // otherwise, users can only close their own orders

        if (decodedToken.role !== 'manager' && request.body.state !== 'CLOSED') {
            // Cannot change state to anything else than CLOSED if not manager
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let isManager = decodedToken.role === 'manager';
        let res = await Tables.Usage.update({
            state: request.body.state
        }, {
            where: {
                id: request.params.id,
                ...(!isManager) ? {id_user: decodedToken.id} : {}
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