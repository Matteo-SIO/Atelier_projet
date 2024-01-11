import {DataTypes, Sequelize} from 'sequelize';

// Define the table TypeMaterials
export function init (bdd: Sequelize) {
    return bdd.define('typeMaterials', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
}