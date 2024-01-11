import {DataTypes, Sequelize} from 'sequelize';

// Define the table Usages
export function init (bdd: Sequelize) {
    return bdd.define('usages', {
        // - make relation to User
        id_user: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
            }
        },

        // - make relation to Material
        id_material: {
            type: DataTypes.INTEGER,
            references: {
                model: 'materials',
            }
        },

        // Simple attributes
        date_start: {
            type: DataTypes.DATE,
            allowNull: false,
            // @ts-ignore
            required: true
        },
        date_end: {
            type: DataTypes.DATE,
            allowNull: false,
            // @ts-ignore
            required: true
        },
        state: {
            type: DataTypes.ENUM('OPENED', 'CLOSED', 'CANCELED'),
            defaultValue: 'OPENED'
        }
    });
}