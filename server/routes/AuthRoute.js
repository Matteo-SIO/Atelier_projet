import * as SessionUtil from '../../utils/SessionUtil.js';

export default (server, BASE_PATH) => {

    /**
     * @api {GET} /api/auth/create-token Generate a session token with credentials
     * @apiParam {String} pseudo User pseudo
     * @apiParam {String} password User password
     * @apiPermission none
     */
    server.get(BASE_PATH + '/create-token', async (request, reply) => {
        let pseudo = request.query.pseudo;
        let password = request.query.password;

        if (pseudo && password) {
            let token = await SessionUtil.generateTokenFromCredentials(pseudo, password);
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