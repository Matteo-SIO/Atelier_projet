import * as SessionUtil from '../../utils/SessionUtil.js';
import {verifyToken} from "../../utils/SessionUtil.js";
import Tables from "../../database/Tables.js";

export default (server, BASE_PATH) => {

    // List all the materials
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        if (!verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let existQuery = Boolean(request.query.exist ?? true);

        // pagination, get lines from [offset]° to [offset + limit]°
        // example: get [0, 20]° lines, then [20, 40]° lines, etc...
        let offsetQuery = Number(request.query.offset ?? 0);
        let limitQuery = Number(request.query.limit ?? 20);

        let materials = await Tables.Material.findAll({
            where: {
                exist: {
                    [existQuery ? '$eq' : '$ne']: false
                }
            },
            offset: offsetQuery,
            limit: limitQuery
        });

        reply.code(200);
        reply.send(materials);
    })

    // Get a material by id
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        if (!verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let material = await Tables.Material.findOne({
            where: {
                id: request.params.id
            }
        });

        if (!material) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        reply.code(200);
        reply.send(material);
    });

    // Delete a material by id
    server.delete(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!verifyToken(decodedToken) || decodedToken.role !== 'MANAGER') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        await Tables.Material.destroy({
            where: {
                id: request.params.id
            }
        });

        reply.code(200);
        reply.send({success: true});
    });

}