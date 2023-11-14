import {DataTypes} from 'sequelize';

// Define the table Users
export const init = (bdd) => {
    return bdd.define('users', {
        pseudo: {
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