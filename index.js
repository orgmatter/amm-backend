const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { liquidityRouter, balanceRouter, reserveRouter } = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use("/balances", balanceRouter);
app.use("/reserve", reserveRouter);

app.listen(PORT, () => {
    console.log("amm-backend running on PORT: ", PORT);
})
