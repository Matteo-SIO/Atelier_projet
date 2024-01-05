import {verifyToken} from "../../utils/SessionUtil.js";
import Tables from "../../database/Tables.js";

export default (server, BASE_PATH) => {

    /**
     * @api {GET} /api/users/ List all the users
     * @apiPermission manager
     * @apiParam {Number} [offset=0] Pagination offset
     * @apiParam {Number} [limit=20] Pagination limit
     */
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
            attributes: ['id', 'email', 'role', 'firstName', 'lastName']
            // return only fields 'id', 'email', 'role', 'firstName', 'lastName'
            // don't return the 'password' fields
        });

        reply.code(200);
        reply.send(users);
    });


    /**
     * @api {GET} /api/users/:id Get a user by id
     * @apiPermission manager, employee (only his own user)
     * @apiParam {Number} id User id
     */
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
            attributes: ['id', 'email', 'role', 'firstName', 'lastName']
            // return only fields 'id', 'email', 'role', 'firstName', 'lastName'
            // don't return the 'password' fields
        });

        if (!user) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        reply.code(200);
        reply.send(user);
    });

    /**
     * @api {GET} /api/users/me Get the current user
     * @apiPermission manager, employee
     */
    server.get(BASE_PATH + '/me', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let user = await Tables.User.findOne({
            where: {
                id: decodedToken.id
            },
            attributes: ['id', 'email', 'role', 'firstName', 'lastName']
            // return only fields 'id', 'email', 'role', 'firstName', 'lastName'
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


    /**
     * @api {PUT} /api/users/:id Update a user by id
     * @apiPermission admin
     * @apiParam {Number} id User id
     * @apiParam {String} [firstName] User first name
     * @apiParam {String} [lastName] User last name
     * @apiParam {String} [email] User email
     * @apiParam {String} [password] User password
     */
    server.put(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'ADMIN') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        await Tables.User.update({
            ...(request.body.firstName ? {firstName: request.body.firstName} : {}),
            ...(request.body.lastName ? {lastName: request.body.lastName} : {}),
            ...(request.body.email ? {email: request.body.email} : {}),
            ...(request.body.password ? {password: request.body.password} : {}),
        }, {
            where: {
                id: request.params.id
            }
        });

        reply.code(200);
        reply.send({success: true});
    });


    /**
     * @api {DELETE} /api/users/:id Delete a user by id
     * @apiPermission admin
     * @apiParam {Number} id User id
     */
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


    /**
     * @api {POST} /api/users/ Create a user
     * @apiPermission admin
     * @apiParam {String} firstName User first name
     * @apiParam {String} lastName User last name
     * @apiParam {String} email User email
     * @apiParam {String} password User password
     * @apiParam {String} role User role
     */
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);
        if (!decodedToken || decodedToken.role !== 'ADMIN') {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        try {
            let user = await Tables.User.create({
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                email: request.body.email,
                password: request.body.password,
                role: request.body.role
            });

            reply.code(200);
            reply.send(user);
        } catch (e) {
            reply.code(400);
            reply.send({error: e.message});
        }
    });

}