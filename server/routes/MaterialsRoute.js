import {verifyToken} from "../../utils/SessionUtil.js";
import Tables from "../../database/Tables.js";

export default (server, BASE_PATH) => {

    /**
     * @api {GET} /api/materials/ List all the materials
     * @apiPermission manager, employee
     * @apiParam {Boolean} [exist=null] Filter by exist
     * @apiParam {Number} [offset=0] Pagination offset
     * @apiParam {Number} [limit=20] Pagination limit
     */
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        if (!verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let existQuery = request.query.exist

        // pagination, get lines from [offset]° to [offset + limit]°
        // example: get [0, 20]° lines, then [20, 40]° lines, etc...
        let offsetQuery = Number(request.query.offset ?? 0);
        let limitQuery = Number(request.query.limit ?? 20);

        let materials = await Tables.Material.findAll({
            where: {
                ...(existQuery !== undefined) ? {exist: Boolean(existQuery)} : {}
            },
            offset: offsetQuery,
            limit: limitQuery
        });

        reply.code(200);
        reply.send(materials);
    })


    /**
     * @api {GET} /api/materials/:id Get a material by id
     * @apiPermission manager, employee
     */
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

    /**
     * @api {DELETE} /api/materials/:id Delete a material by id
     * @apiPermission manager, employee (only his own orders)
     */
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


    /**
     * @api {POST} /api/materials/ Create a material
     * @apiPermission manager
     * @apiBody {Number} id_typeMaterial
     * @apiBody {String} name
     * @apiBody {Boolean} [exist=true]
     */
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!verifyToken(decodedToken) || decodedToken.role !== 'MANAGER') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        try {
            await Tables.Material.create({
                id_typeMaterial: request.body.id_typeMaterial,
                name: request.body.name,
                exist: request.body.exist ?? true,
            });
            reply.code(201);
        } catch (error) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    });


    /**
     * @api {PUT} /api/materials/:id Update a material by id
     * @apiPermission manager
     * @apiBody {Number} id_typeMaterial
     * @apiBody {String} name
     * @apiBody {Boolean} [exist=true]
     */
    server.put(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!verifyToken(decodedToken) || decodedToken.role !== 'MANAGER') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        await Tables.Material.update({
            id_typeMaterial: request.body.id_typeMaterial,
            name: request.body.name,
            exist: request.body.exist ?? true,
        }, {
            where: {
                id: request.params.id
            }
        });

        reply.code(200);
        reply.send({success: true});
    });

}