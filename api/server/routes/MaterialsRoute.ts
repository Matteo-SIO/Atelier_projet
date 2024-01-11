import {verifyToken} from "../../utils/SessionUtil";
import Tables from "../../database/Tables.js";
import {FastifyInstance} from "fastify";
import {
    CreateOneMaterialsRequest, CreateOneMaterialsResponse, DeleteOneMaterialsResponse,
    GetMaterialsRequest,
    GetMaterialsResponse,
    GetMaterialsRowResponse,
    GetOneMaterialsResponse,
    UpdateOneMaterialsRequest,
} from "../../../@types/requests/materials";

export default function (server: FastifyInstance, BASE_PATH: string) {

    /**
     * @api {GET} /api/materials/ List all the materials
     * @apiPermission manager, employee
     * @apiParam {Boolean} [active=null] Filter by active
     * @apiParam {Number} [offset=0] Pagination offset
     * @apiParam {Number} [limit=20] Pagination limit
     */
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        if (!token || !verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqData = request.query as GetMaterialsRequest;

        try {
            let materials = await Tables.Material.findAll({
                where: {
                    ...(reqData.active !== undefined) ? {active: Boolean(reqData.active)} : {}
                },
                offset: Number(reqData.offset ?? 0),
                limit: Number(reqData.limit ?? 20)
            });

            let resData: GetMaterialsResponse = [];
            for (let material of materials) {
                resData.push({
                    id: material.id,
                    name: material.name,
                    id_typeMaterial: material.id_typeMaterial,
                    active: material.active,
                } as GetMaterialsRowResponse);
            }

            reply.code(200);
            reply.send(resData as GetMaterialsResponse);
        } catch (error: any) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    })


    /**
     * @api {GET} /api/materials/:id Get a material by id
     * @apiPermission manager, employee
     */
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        if (!token || !verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqParams = request.params as any;

        try {
            let material = await Tables.Material.findOne({
                where: {
                    id: reqParams.id
                }
            });

            if (!material) {
                reply.code(404);
                reply.send({error: 'Not Found'});
                return;
            }

            reply.code(200);
            reply.send({
                id: material.id,
                name: material.name,
                id_typeMaterial: material.id_typeMaterial,
                active: material.active,
            } as GetOneMaterialsResponse);
        } catch (error: any) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    });

    /**
     * @api {DELETE} /api/materials/:id Delete a material by id
     * @apiPermission manager, employee (only his own orders)
     */
    server.delete(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!token || !decodedToken || decodedToken.role !== 'MANAGER') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqParams = request.params as any;

        try {
            await Tables.Material.destroy({
                where: {
                    id: reqParams.id
                }
            });

            reply.code(200);
            reply.send({
                success: true
            } as DeleteOneMaterialsResponse);
        } catch (error: any) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    });


    /**
     * @api {POST} /api/materials/ Create a material
     * @apiPermission manager
     * @apiBody {Number} id_typeMaterial
     * @apiBody {String} name
     * @apiBody {Boolean} [active=true]
     */
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!token || !decodedToken || decodedToken.role !== 'MANAGER') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqData = request.body as CreateOneMaterialsRequest;

        try {
            await Tables.Material.create({
                id_typeMaterial: reqData.id_typeMaterial,
                name: reqData.name,
                active: reqData.active ?? true,
            });
            reply.code(201);
            reply.send({
                success: true,
            } as CreateOneMaterialsResponse);
        } catch (error: any) {
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
     * @apiBody {Boolean} [active=true]
     */
    server.put(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!token || !decodedToken || decodedToken.role !== 'MANAGER') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqParams = request.params as any;
        let reqData = request.body as UpdateOneMaterialsRequest;

        try {
            await Tables.Material.update({
                id_typeMaterial: reqData.id_typeMaterial,
                name: reqData.name,
                active: reqData.active ?? true,
            }, {
                where: {
                    id: reqParams.id
                }
            });

            reply.code(200);
            reply.send({
                success: true
            } as UpdateOneMaterialsRequest);
        } catch (error: any) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    });

}