import {DataTypes} from 'sequelize';

// Define the table TypeMaterials
export default (bdd) => {
    return bdd.define('typeMaterials', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
}