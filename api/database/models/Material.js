import {DataTypes} from 'sequelize';

// Define the table Materials
export const init = (bdd) => {
    return bdd.define('materials', {
        // - Make relation to TypeMaterial
        id_typeMaterial: {
            type: DataTypes.INTEGER,
            references: {
                model: 'typeMaterials',
            }
        },

        // Simple attributes
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
}