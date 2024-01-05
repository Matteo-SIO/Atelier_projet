import * as SessionUtil from '../../utils/SessionUtil.js';

export default (server, BASE_PATH) => {

    /**
     * @api {GET} /api/auth/create-token Generate a session token with credentials
     * @apiParam {String} email User email
     * @apiParam {String} password User password
     * @apiPermission none
     */
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


    /**
     * @api {GET} /api/auth/verify-token Verify a session token
     * @apiParam {String} token Session token
     * @apiPermission none
     */
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