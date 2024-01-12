import {verifyToken} from "../../utils/SessionUtil";
import Tables from "../../database/Tables.js";
import {
    CreateUserRequest, DeleteUserResponse, GetOneUserResponse,
    GetUsersRequest,
    GetUsersResponse,
    UpdateUserRequest, UpdateUserResponse,
    UserMeResponse, UserRowResponse
} from "../../../@types/requests/users";
import {FastifyInstance} from "fastify";

export default function (server: FastifyInstance, BASE_PATH: string) {

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

        let reqData = request.query as GetUsersRequest;

        // pagination, get lines from [offset]° to [offset + limit]°
        // example: get [0, 20]° lines, then [20, 40]° lines, etc...
        let offsetQuery = Number(reqData.offset ?? 0);
        let limitQuery = Number(reqData.limit ?? 20);

        let users = await Tables.User.findAll({
            offset: offsetQuery,
            limit: limitQuery,
        });

        let resData: GetUsersResponse = []
        for (let user of users) {
            let itemData: UserRowResponse = {
                id: user.id,
                email: user.email,
                role: user.role,
                firstname: user.firstname,
                lastname: user.lastname,
                createdAt: user.createdAt.getTime()
            }
            resData.push(itemData)
        }

        reply.code(200);
        reply.send(resData as GetUsersResponse);
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

        let reqParams = request.params as any;

        let user = await Tables.User.findOne({
            where: {
                id: reqParams.id
            },
            attributes: ['id', 'email', 'role', 'firstname', 'lastname']
            // return only fields 'id', 'email', 'role', 'firstname', 'lastname'
            // don't return the 'password' fields
        });

        if (!user) {
            reply.code(404);
            reply.send({error: 'Not Found'});
            return;
        }

        reply.code(200);
        reply.send({
            id: user.id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role
        } as GetOneUserResponse);
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

        try {
            let user = await Tables.User.findOne({
                where: {
                    id: decodedToken.id
                },
                attributes: ['id', 'email', 'role', 'firstname', 'lastname']
                // return only fields 'id', 'email', 'role', 'firstname', 'lastname'
                // don't return the 'password' and 'email' fields
            });

            if (!user) {
                reply.code(404);
                reply.send({error: 'Not Found'});
                return;
            }

            reply.code(200);
            reply.send({
                id: user.id,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                role: user.role
            } as UserMeResponse);
        } catch (e: any) {
            reply.code(400);
            reply.send({error: e.message});
        }
    });


    /**
     * @api {PUT} /api/users/:id Update a user by id
     * @apiPermission admin
     * @apiParam {Number} id User id
     * @apiParam {String} [firstname] User first name
     * @apiParam {String} [lastname] User last name
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

        let reqParams = request.params as any;
        let reqData = request.body as UpdateUserRequest;

        try {
            await Tables.User.update({
                ...(reqData.firstname ? {firstname: reqData.firstname} : {}),
                ...(reqData.lastname ? {lastname: reqData.lastname} : {}),
                ...(reqData.email ? {email: reqData.email} : {}),
                ...(reqData.password ? {password: reqData.password} : {}),
            }, {
                where: {
                    id: reqParams.id
                }
            });

            reply.code(200);
            reply.send({
                success: true
            } as UpdateUserResponse);
        } catch (e: any) {
            reply.code(400);
            reply.send({error: e.message});
        }
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

        let reqParams = request.params as any;

        try {
            await Tables.User.destroy({
                where: {
                    id: reqParams.id
                }
            });

            reply.code(200);
            reply.send({
                success: true
            } as DeleteUserResponse);
        } catch (e: any) {
            reply.code(400);
            reply.send({error: e.message});
        }
    });


    /**
     * @api {POST} /api/users/ Create a user
     * @apiPermission admin
     * @apiParam {String} firstname User first name
     * @apiParam {String} lastname User last name
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

        let reqData = request.body as CreateUserRequest;

        try {
            await Tables.User.create({
                firstname: reqData.firstname,
                lastname: reqData.lastname,
                email: reqData.email,
                password: reqData.password,
                role: reqData.role
            });

            reply.code(200);
            reply.send({
                success: true,
            });
        } catch (e: any) {
            reply.code(400);
            reply.send({error: e.message});
        }
    });

}