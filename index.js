import * as DB from './database/db.js';
import * as Server from './server/server.js';

// Connect to the database
DB.connect({
    host: 'localhost',
    post: 3307,
    user: 'root',
    pass: '',
    dbName: 'atelier_projet'
}).then(async () => {
    // The database is connected

    // TODO: Start the REST API
    await Server.start(3000);


});