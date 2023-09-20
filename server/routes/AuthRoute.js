import * as SessionUtil from '../../utils/SessionUtil.js';
import Tables from "../../database/Tables.js";
import {getUserFromToken} from "../../utils/SessionUtil.js";


export default (server, BASE_PATH) => {

    // Generate a session token with credentials
    server.get(BASE_PATH + '/create-token', async (request, reply) => {
        let email = request.query.email;
        let password = request.query.password;

        if (email && password) {
            let token = await SessionUtil.generateTokenFromCredentials(email, password);
            if (token) {
                reply.code(200);
                reply.send({token: token});
                return;
            }
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        reply.code(400);
        reply.send({error: 'Bad Request'});
    });

    // Verify a session token
    server.get(BASE_PATH + '/verify-token', async (request, reply) => {
        let token = request.query.token;
        if (SessionUtil.getUserFromToken(token)) {
            reply.code(200);
            reply.send({valid: true});
            return;
        }

        reply.code(401);
        reply.send({valid: false});
    });

}