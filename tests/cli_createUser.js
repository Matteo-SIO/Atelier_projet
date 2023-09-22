import * as DB from '../database/db.js';
import Config from "../config.js";
import Tables from "../database/Tables.js";

// read arg from command line
// pattern key=value

let values = {};
for (let i = 2; i < process.argv.length; i++) {
    let arg = process.argv[i];
    let [key, value] = arg.split('=');
    values[key] = value;
}


// Connect to the database
DB.connect(Config.DB).then(async () => {
    let res = await Tables.User.create(values);
    console.log(res);
});

