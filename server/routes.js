export let defineRoutes = async (server) => {
    (await import('./routes/AuthRoute.js')).default(server, '/api/auth');
}