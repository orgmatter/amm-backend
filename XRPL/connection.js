require('dotenv').config();
const xrpl = require("xrpl");

// set network here
const xrpl_testnet = process.env.XRPL_TESTNET;
const xrpl_devnet = process.env.XRPL_DEVNET;

async function connection() {

    // set your client here
    const client = new xrpl.Client(xrpl_devnet);
    await client.connect();
    return client;
}


module.exports = {
    connection
}