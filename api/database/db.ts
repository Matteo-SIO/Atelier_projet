import {Sequelize, Op} from 'sequelize';
import * as tables from "./Tables";
import {DbConfig} from "../../@types/api/config";

/**
 * Connect to the database
 * Define the tables if they don't exist
 *
 * @param {DbConfig} config
 * @returns {Promise<unknown>}
 */
export async function connect (config: DbConfig) {
    let sequelize = new Sequelize(config.dbName, config.user, config.pass, {
        host: config.host,
        port: config.post,
        dialect: 'mysql',
        username: config.user,
        password: config.pass,
        logging: config.debug,

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