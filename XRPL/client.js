const { connection } = require("./connection");
async function xrplClient() {
    return await connection();
}
module.exports = {
    xrplClient
}