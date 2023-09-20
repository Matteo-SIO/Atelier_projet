import * as DB from './database/db.js';

// Connect to the database
DB.connect({
    host: 'localhost',
    post: 3307,
    user: 'root',
    pass: '',
    dbName: 'atelier_projet'
}).then(() => {
    // The database is connected

    // TODO: Start the REST API

});