const Tables = {};
export default Tables;

export async function defineTables (bdd) {
    // Import all the tables
    Tables.User = (await import('./models/User.js')).init(bdd);
    Tables.Session = (await import('./models/Session.js')).init(bdd);

    Tables.TypeMaterial = (await import('./models/TypeMaterial.js')).init(bdd);
    Tables.Material = (await import('./models/Material.js')).init(bdd);

    Tables.Usage = (await import('./models/Usage.js')).init(bdd);
    Tables.Incident = (await import('./models/Incident.js')).init(bdd);
    Tables.Order = (await import('./models/Order.js')).init(bdd);

    // Sync the tables
    await bdd.sync();
}