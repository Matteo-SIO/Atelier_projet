import {verifyToken} from "../../utils/SessionUtil.js";
import Tables from "../../database/Tables.js";

export default (server, BASE_PATH) => {

    // List all the types materials
    // Role: employee
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        if (!verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let typeMaterials = await Tables.TypeMaterial.findAll({});

        reply.code(200);
        reply.send(typeMaterials);
    });

    // Get a type material by id
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        if (!verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let typeMaterial = await Tables.TypeMaterial.findOne({
            where: {
                id: request.params.id
            }
        });

        if (!typeMaterial) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        reply.code(200);
        reply.send(typeMaterial);
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

        try {
            await Tables.TypeMaterial.create({
                name: request.body.name,
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

        await Tables.TypeMaterial.update({
            name: request.body.name,
        }, {
            where: {
                id: request.params.id
            }
        });

        reply.code(200);
        reply.send({success: true});
    });

}