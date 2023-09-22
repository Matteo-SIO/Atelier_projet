import {verifyToken} from "../../utils/SessionUtil.js";
import Tables from "../../database/Tables.js";

export default (server, BASE_PATH) => {

    // List all the orders
    // require role 'manager'
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'manager') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        // pagination, get lines from [offset]° to [offset + limit]°
        // example: get [0, 20]° lines, then [20, 40]° lines, etc...
        let offsetQuery = Number(request.query.offset ?? 0);
        let limitQuery = Number(request.query.limit ?? 20);

        let orders = await Tables.Order.findAll({
            offset: offsetQuery,
            limit: limitQuery,
            include: { all: true, nested: true }
        });

        reply.code(200);
        reply.send(orders);
    });

    // Get an order by id
    // require role 'manager'
    // Or, require user_id === decodedToken.id
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        let order = await Tables.Order.findOne({
            where: {
                id: request.params.id
            },
            include: { all: true, nested: true }
        });

        if (!order) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        let isManager = decodedToken.role === 'manager';
        let isCreatedByUser = order.user.id === decodedToken.id;

        if (decodedToken && (isManager || isCreatedByUser)) {
            reply.code(200);
            reply.send(order);
            return;
        }

        reply.code(401);
        reply.send({error: 'Unauthorized'});
    });

    // Create an order
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        try {
            await Tables.Order.create(request.body);
            reply.code(201);
        } catch (error) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
        }
    });

    // change state of an order
    server.post(BASE_PATH + '/:id/state', async (request, reply) => {
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

        let res = await Tables.Order.update({state: request.body.state}, {
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

}