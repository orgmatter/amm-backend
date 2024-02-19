const { xrplClient } = require("./client");

async function getBalance(address) {
    const client = await xrplClient();
    const addrBalance = await client.getBalances(address);
    return addrBalance;
}

module.exports = getBalance;