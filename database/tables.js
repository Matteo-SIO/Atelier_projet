export let defineTables = async (bdd) => {

    // Import all the tables
    (await import('./models/User.js')).default(bdd);
    (await import('./models/Session.js')).default(bdd);

    (await import('./models/TypeMaterial.js')).default(bdd);
    (await import('./models/Material.js')).default(bdd);

    (await import('./models/Usage.js')).default(bdd);
    (await import('./models/Incident.js')).default(bdd);
    (await import('./models/Order.js')).default(bdd);

    // Sync the tables
    await bdd.sync();

}