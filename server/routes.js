export let defineRoutes = async (server) => {
    (await import('./routes/AuthRoute.js')).default(server, '/api/auth');
    (await import('./routes/MaterialsRoute.js')).default(server, '/api/materials');
    (await import('./routes/UsersRoute.js')).default(server, '/api/users');
}