import {Sequelize} from 'sequelize';
import * as table from './tables.js';

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
export let connect = ({host, post, user, pass, dbName}) => {
    return new Promise((resolve, reject) => {
        let sequelize = new Sequelize(dbName, user, pass, {
            host: host,
            port: post,
            dialect: 'mysql',
            username: user,
            password: pass,
        });

        sequelize.authenticate().then(() => {
            table.init(sequelize);
            resolve(sequelize);
        })
    });
}