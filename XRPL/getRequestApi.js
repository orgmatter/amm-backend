const { xrplClient } = require("./client");

async function getRequest(request) {
    const client = await xrplClient();
    const response = await client.request(request)
    return response;
}

module.exports = getRequest;