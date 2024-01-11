import {verifyToken} from "../../utils/SessionUtil";
import Tables from "../../database/Tables.js";
import {FastifyInstance} from "fastify";
import {
    CreateTypeMaterialsRequest, CreateTypeMaterialsResponse, DeleteTypeMaterialsResponse,
    GetTypesMaterialsResponse, TypeMaterialsRowResponse,
    UpdateTypeMaterialsRequest, UpdateTypeMaterialsResponse
} from "../../../@types/requests/typeMaterials";

export default function (server: FastifyInstance, BASE_PATH: string) {

    // List all the types materials
    // Role: employee
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        if (!verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        try {
            let typeMaterials = await Tables.TypeMaterial.findAll({});

            let resData: GetTypesMaterialsResponse = []
            for (let typeMaterial of typeMaterials) {
                resData.push({
                    id: typeMaterial.id,
                    name: typeMaterial.name,
                } as TypeMaterialsRowResponse);
            }

            reply.code(200);
            reply.send(typeMaterials as GetTypesMaterialsResponse);
        } catch (error: any) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    });

    // Get a type material by id
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        if (!verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqParams = request.params as any;

        try {
            let typeMaterial = await Tables.TypeMaterial.findOne({
                where: {
                    id: reqParams.id
                }
            });

            if (!typeMaterial) {
                reply.code(404);
                reply.send({error: 'Not Found'});
                return;
            }

            reply.code(200);
            reply.send({
                id: typeMaterial.id,
                name: typeMaterial.name,
            } as TypeMaterialsRowResponse);
        } catch (error: any) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    });

    // Create a type material
    // require role 'manager'
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'manager') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqData = request.body as CreateTypeMaterialsRequest;

        try {
            await Tables.TypeMaterial.create({
                name: reqData.name,
            });
            reply.code(201);
            reply.send({
                success: true,
            } as CreateTypeMaterialsResponse);
        } catch (error: any) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    });

    // Update a type material by id
    // Require an authorization with the role 'manager'
    server.put(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'manager') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqParams = request.params as any;
        let reqData = request.body as UpdateTypeMaterialsRequest;

        try {
            await Tables.TypeMaterial.update({
                name: reqData.name,
            }, {
                where: {
                    id: reqParams.id
                }
            });

            reply.code(200);
            reply.send({
                success: true
            } as UpdateTypeMaterialsResponse);
        } catch (error: any) {
            reply.code(400);
            reply.send({
                error: error.errors[0].message
            });
            return;
        }
    });

}