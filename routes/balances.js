const express = require('express');
const balanceRouter = express.Router();
const getBalance = require('../XRPL/getBalance');

balanceRouter.get("/:address", (req, res) => {

    const { address } = req.params;
    
    getBalance(address)
    .then((balance) => {
        res.json({
            addr_bal: balance,
        })
    })

})

module.exports = balanceRouter;