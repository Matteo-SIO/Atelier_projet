export default (server, BASE_PATH) => {

    server.get(BASE_PATH + '/', async (request, reply) => {
        reply.send({
            message: 'Hello World!'
        });
    });

}