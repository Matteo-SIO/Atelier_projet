import {verifyToken} from "../utils/SessionUtil.ts";
import {addNotification, registerHook} from "./Notification.js";
import Config from "../config.ts";


export default (server, BASE_PATH) => {

    /**
     * @api {GET} /api/notifications/ Wait for new notifications
     * @apiPermission employee
     */
    server.get(BASE_PATH + '/wait', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        try {
            let notification = await registerHook(decodedToken);
            reply.code(200);
            reply.send(notification);
        } catch (_e) {
            reply.code(204);
            reply.send(null);
        }
    })

    /**
     * @api {POST} /api/notifications/test Send a test notification
     * @apiPermission none (Config.SERVER.special_routes)
     */
    server.post(BASE_PATH + '/test', async (request, reply) => {
        if (Config.SERVER.special_routes !== true) {
            reply.code(403);
            reply.send({error: 'Forbidden'});
            return;
        }

        if (!request.body.type || !request.body.content) {
            reply.code(400);
            reply.send({error: 'Bad Request'});
            return;
        }

        addNotification({
            type: request.body.type,
            content: request.body.content,
        }, (decodedToken) => {
            console.log(decodedToken);
            return true;
        });

        reply.code(201);
        reply.send({success: true});
    });

}