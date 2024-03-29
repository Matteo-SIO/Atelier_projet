import {DataTypes, Sequelize} from 'sequelize';

// Define the table Users
export function init (bdd: Sequelize) {
    return bdd.define('users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('ADMIN', 'MANAGER', 'EMPLOYEE'),
            defaultValue: 'EMPLOYEE'
        }
    });
}