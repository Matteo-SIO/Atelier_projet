import fastify from 'fastify'
import fastifyCors from '@fastify/cors'

import {defineRoutes} from "./routes.js";
import {ServerConfig} from "../../@types/api/config";

/**
 * Start the server
 * @param {ServerConfig} config
 */
export async function start (config: ServerConfig) {
    let server = fastify({
        logger: config.debug,
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
    server.listen({
        port: config.port,
        host: '0.0.0.0'
    }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening on ${address}`)
    });

}