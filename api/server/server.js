import fastify from 'fastify'
import fastifyCors from '@fastify/cors'

import {defineRoutes} from "./routes.js";

export let start = async ({port, debug}) => {
    let server = fastify({
        logger: debug,
        ignoreTrailingSlash: true
    });

    // register cors
    await server.register(fastifyCors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
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