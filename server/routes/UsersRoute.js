import {verifyToken} from "../../utils/SessionUtil.js";
import Tables from "../../database/Tables.js";

export default (server, BASE_PATH) => {

    // List all the users
    // Require an authorization with the role 'manager'
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'ADMIN') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        // pagination, get lines from [offset]° to [offset + limit]°
        // example: get [0, 20]° lines, then [20, 40]° lines, etc...
        let offsetQuery = Number(request.query.offset ?? 0);
        let limitQuery = Number(request.query.limit ?? 20);

        let users = await Tables.User.findAll({
            offset: offsetQuery,
            limit: limitQuery,
            attributes: ['id', 'role', 'firstName', 'lastName']
            // return only fields 'id', 'role', 'firstName', 'lastName'
            // don't return the 'password' and 'email' fields
        });

        reply.code(200);
        reply.send(users);
    });

    // Get a user by id
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        if (!verifyToken(token)) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let user = await Tables.User.findOne({
            where: {
                id: request.params.id
            },
            attributes: ['id', 'role', 'firstName', 'lastName']
            // return only fields 'id', 'role', 'firstName', 'lastName'
            // don't return the 'password' and 'email' fields
        });

        if (!user) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        reply.code(200);
        reply.send(user);
    });

    // Update a user by id
    // Require an authorization with the role 'admin'
    server.put(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'ADMIN') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        await Tables.User.update(request.body, {
            where: {
                id: request.params.id
            }
        });

        reply.code(200);
        reply.send({success: true});
    });

    // Delete a user by id
    // Require an authorization with the role 'admin'
    server.delete(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'ADMIN') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        await Tables.User.destroy({
            where: {
                id: request.params.id
            }
        });

        reply.code(200);
        reply.send({success: true});
    });

    // Create a user
    // Require an authorization with the role 'admin'
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'ADMIN') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        try {
            await Tables.User.create({
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                email: request.body.email,
                password: request.body.password,
                role: request.body.role
            });

            reply.code(200);
            reply.send({success: true});
        } catch (e) {
            reply.code(400);
            reply.send({error: e.message});
        }
    });

}