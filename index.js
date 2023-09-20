import * as DB from './database/db.js';
import * as Server from './server/server.js';
import Config from "./config.js";

// Connect to the database
DB.connect(Config.DB).then(async () => {
    // The database is connected

    // Start the REST API server
    await Server.start(3000);
});