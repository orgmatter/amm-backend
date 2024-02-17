const express = require('express');
const liquidityRouter = express.Router();
const { client } = require("../XRPL/client")

liquidityRouter.get("/liquidity", (req, res) => {

    const { address } = req.body;
    const addrBalance = await client.getBalances(address);
    return res.json({
        addr_balance: addrBalance
    });
})

module.exports = liquidityRouter;