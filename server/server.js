import fastify from 'fastify'
import {defineRoutes} from "./routes.js";

export let start = async ({port, debug}) => {
    let server = fastify({
        logger: debug,
        ignoreTrailingSlash: true
    });

    // register the routes
    await defineRoutes(server);

    // start the server
    await server.listen(port, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening on ${address}`)
    });

}