import {DataTypes} from 'sequelize';

// Define the table Incident
export const init = (bdd) => {
    return bdd.define('incidents', {
        // - Make relation to User
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
            }
        },

        // - Make relation to Material
        id_material: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'materials',
            }
        },

        // Simple attributes
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        state: {
            type: DataTypes.ENUM('OPENED', 'CLOSED', 'CANCELED'),
            defaultValue: 'OPENED'
        }
    });
}