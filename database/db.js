import {Sequelize} from 'sequelize';
import * as tables from "./Tables.js";

/**
 * Connect to the database
 * Define the tables if they don't exist
 *
 * @param host
 * @param post
 * @param user
 * @param pass
 * @param dbName
 * @param debug
 * @returns {Promise<unknown>}
 */
export let connect = async ({host, post, user, pass, dbName, debug = false}) => {
    let sequelize = new Sequelize(dbName, user, pass, {
        host: host,
        port: post,
        dialect: 'mysql',
        username: user,
        password: pass,
        logging: debug
    });

    await sequelize.authenticate();
    await tables.defineTables(sequelize);
}