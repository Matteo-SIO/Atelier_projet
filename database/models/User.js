import {DataTypes} from 'sequelize';

// Define the table Users
export default (bdd) => {
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
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
}