import * as SessionUtil from '../../utils/SessionUtil.js';
import {CreateTokenRequest, CreateTokenResponse} from "../../../@types/requests/auth.js";
import {FastifyInstance} from "fastify";

export default function (server: FastifyInstance, BASE_PATH: string) {

    /**
     * @api {GET} /api/auth/create-token Generate a session token with credentials
     * @apiParam {String} email User email
     * @apiParam {String} password User password
     * @apiPermission none
     */
    server.get(BASE_PATH + '/create-token', async (request, reply) => {
        let reqData = request.query as CreateTokenRequest;
        if (!reqData.email || !reqData.password) {
            reply.code(400);
            reply.send({error: 'Bad Request'});
            return;
        }

        let token = await SessionUtil.generateTokenFromCredentials(reqData.email, reqData.password);
        if (!token) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        reply.code(200);
        reply.send({
            token: token
        } as CreateTokenResponse);
        return;
    });

}