export let defineRoutes = async (server) => {
    (await import('./routes/AuthRoute.js')).default(server, '/api/auth');
    (await import('./routes/MaterialsRoute.js')).default(server, '/api/materials');
    (await import('./routes/UsersRoute.js')).default(server, '/api/users');
    (await import('./routes/TypeMaterialsRoute.js')).default(server, '/api/type-materials');
    (await import('./routes/OrderRoute.js')).default(server, '/api/orders');
}