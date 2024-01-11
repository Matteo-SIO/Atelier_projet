import * as DB from '../database/db.ts';
import Config from "../config.ts";
import Tables from "../database/Tables.ts";

if (process.argv.length < 3) {
    console.log('Usage: node cli_createUser.js key1=value1 key2=value2 ...');
    console.log('Allowed keys: email, password, role, firstname, lastname');
    process.exit(1);
}

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

