import {Sequelize, Op} from 'sequelize';
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
        logging: debug,

        // aliases operators
        operatorsAliases: {
            $eq: Op.eq,
            $ne: Op.ne,
            $gte: Op.gte,
            $gt: Op.gt,
            $lte: Op.lte,
            $lt: Op.lt,
            $not: Op.not,
            $in: Op.in,
            $notIn: Op.notIn,
            $is: Op.is,
            $like: Op.like,
        }
    });

    await sequelize.authenticate();
    await tables.defineTables(sequelize);
}