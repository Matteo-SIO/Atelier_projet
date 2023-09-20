import * as SessionUtil from '../../utils/SessionUtil.js';
import Tables from "../../database/Tables.js";


export default (server, BASE_PATH) => {

    // Generation a session token with credentials
    server.get(BASE_PATH + '/create-token', async (request, reply) => {
        let email = request.query.email;
        let password = request.query.password;

        let user = await Tables.User.findOne(email);




    });

}