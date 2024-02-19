const express = require('express');
const balanceRouter = express.Router();
const getBalance = require('../XRPL/getBalance');

balanceRouter.get("/balance", (req, res) => {

    const { address } = req.body;
    
    getBalance(address)
    .then((balance) => {
        res.json({
            addr_bal: balance,
        })
    })

})

module.exports = balanceRouter;