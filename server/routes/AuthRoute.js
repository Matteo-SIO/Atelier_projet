import * as SessionUtil from '../../utils/SessionUtil.js';
import Tables from "../../database/Tables.js";


export default (server, BASE_PATH) => {

    // Generate a session token with credentials
    server.get(BASE_PATH + '/create-token', async (request, reply) => {
        let email = request.query.email;
        let password = request.query.password;

        if (email && password) {
            let user = await Tables.User.findOne({
                where: {
                    email: email,
                    password: password
                }
            });

            if (user) {
                let token = SessionUtil.generateToken(user);
                await Tables.Session.create({
                    token: token,
                    id_user: user.id
                });
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
        try {
            let token = request.query.token;
            let decoded = SessionUtil.verifyToken(token);

            let session = await Tables.Session.findOne({
                where: {
                    token: token
                }
            });

            if (session) {
                reply.code(200);
                reply.send({decoded: decoded});
                return;
            }

            reply.code(401);
            reply.send({error: 'Unauthorized'});
        } catch (error) {
            reply.code(400);
            reply.send({error: 'Bad Request'});
        }
    });

}