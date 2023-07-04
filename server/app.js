const express = require('express')
const app = express()

const router = require("./routers")
const {connect} = require("./models/connector")
require("dotenv").config();

connect()

router.use(express.json())
router.use(express.urlencoded({extended: true}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", router);

app.use((err, req, res) => {
    return res.status(500).json(error);
})

app.listen(8088)