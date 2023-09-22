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
            include: [
                {
                    model: Tables.User,
                    as: 'user'
                },
                {
                    model: Tables.TypeMaterial,
                    as: 'typeMaterial'
                }
            ]
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

}