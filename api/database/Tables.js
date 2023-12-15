const Tables = {};
export default Tables;

export async function defineTables (bdd) {
    // Import all the tables
    Tables.User = (await import('./models/User.js')).init(bdd);

    Tables.TypeMaterial = (await import('./models/TypeMaterial.js')).init(bdd);
    Tables.Material = (await import('./models/Material.js')).init(bdd);

    Tables.Usage = (await import('./models/Usage.js')).init(bdd);
    Tables.Incident = (await import('./models/Incident.js')).init(bdd);
    Tables.Order = (await import('./models/Order.js')).init(bdd);

    // Define the relations
    Tables.User.hasMany(Tables.Order, { as: 'orders', foreignKey: 'id_user' });
    Tables.Order.belongsTo(Tables.User, { as: 'user', foreignKey: 'id_user' });

    Tables.User.hasMany(Tables.Usage, { as: 'usages', foreignKey: 'id_user' });
    Tables.Usage.belongsTo(Tables.User, { as: 'user', foreignKey: 'id_user' });

    Tables.User.hasMany(Tables.Incident, { as: 'incidents', foreignKey: 'id_user' });
    Tables.Incident.belongsTo(Tables.User, { as: 'user', foreignKey: 'id_user' });

    Tables.TypeMaterial.hasMany(Tables.Material, { as: 'materials', foreignKey: 'id_typeMaterial' });
    Tables.Material.belongsTo(Tables.TypeMaterial, { as: 'type_material', foreignKey: 'id_typeMaterial' });

    Tables.Material.hasMany(Tables.Usage, { as: 'usages', foreignKey: 'id_material' });
    Tables.Usage.belongsTo(Tables.Material, { as: 'material', foreignKey: 'id_material' });

    Tables.Material.hasMany(Tables.Incident, { as: 'incidents', foreignKey: 'id_material' });
    Tables.Incident.belongsTo(Tables.Material, { as: 'material', foreignKey: 'id_material' });

    Tables.Material.hasMany(Tables.Order, { as: 'orders', foreignKey: 'id_material' });
    Tables.Order.belongsTo(Tables.Material, { as: 'material', foreignKey: 'id_material' });

    // Sync the tables
    await bdd.sync();
}