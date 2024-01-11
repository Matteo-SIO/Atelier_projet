import {FastifyInstance} from "fastify";

export async function defineRoutes (server: FastifyInstance) {
    (await import('./routes/MaterialsRoute')).default(server, '/api/materials');
    (await import('./routes/UsersRoute')).default(server, '/api/users');
    (await import('./routes/TypeMaterialsRoute')).default(server, '/api/type-materials');
    (await import('./routes/UsageRoute')).default(server, '/api/usages');

    (await import('./routes/AuthRoute')).default(server, '/api/auth');
}