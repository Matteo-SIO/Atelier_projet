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
 * @returns {Promise<unknown>}
 */
export let connect = async ({host, post, user, pass, dbName}) => {
    let sequelize = new Sequelize(dbName, user, pass, {
        host: host,
        port: post,
        dialect: 'mysql',
        username: user,
        password: pass,
    });

    await sequelize.authenticate();
    await tables.defineTables(sequelize);
}