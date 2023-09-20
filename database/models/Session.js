import {DataTypes} from 'sequelize';

// Define the table Sessions
export default (bdd) => {
    return bdd.define('sessions', {
        // - Make relation to User
        id_user: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
            }
        },

        // Simple attributes
        token: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
}