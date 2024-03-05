const express = require('express');
const reserveRouter = express.Router();
const getRequestApi = require('../XRPL/getRequestApi');
const { xrplClient } = require("../XRPL/client");

const jsonRpcObj = {
    "method": "server_info",
    "params": [{}]
}

reserveRouter.get("", (req, res) => {

    getRequestApi(jsonRpcObj)
    .then(resp => {
        res.json({
            serverInfo: resp.result
        })
    })
    
    // xrplClient()
    // .then(client => {
    //    res.json({
    //        serverInfo: client.getServerInfo()
    //    })
    // })
})

module.exports = reserveRouter;