import * as DB from './database/db.js';

DB.connect({
    host: 'localhost',
    post: 3307,
    user: 'root',
    pass: '',
    dbName: 'atelier_projet'
}).then(() => {

});