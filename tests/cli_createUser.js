import * as DB from '../database/db.js';
import Config from "../config.js";
import Tables from "../database/Tables.js";

// read arg from command line
let email = process.argv[2];
let password = process.argv[3];

// Connect to the database
DB.connect(Config.DB).then(async () => {
    let res = await Tables.User.create({
        email: email,
        password: password
    });
    console.log(res);
});

