export let init = async (bdd) => {

    // Import all the tables
    const User = (await import('./models/User.js')).default(bdd);

    // Define the relations between the tables
    // TODO...

    // Sync the tables
    await bdd.sync();

}