import {DataTypes} from 'sequelize';

// Define the table Usages
export const init = (bdd) => {
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
            required: true
        },
        date_end: {
            type: DataTypes.DATE,
            allowNull: false,
            required: true
        },
        state: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
}