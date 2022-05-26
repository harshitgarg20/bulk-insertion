require("dotenv").config;
require("./connection");

const api = require("./api/api");
const express = require('express');
const app = express();

app.use(express.json());

app.use("/api", api);
const port = 4000;
app.listen(port, () => {
    console.log(`Port is listern in port ${port}`);
});