require('dotenv').config();
const xrpl = require("xrpl");

// set network here
const xrpl_testnet = process.env.XRPL_TESTNET;
const xrpl_devnet = process.env.XRPL_DEVNET;

// set your client here
const client = new xrpl.Client(xrpl_devnet);


module.exports = {
    client
}