const express = require('express')
const app = express()

const router = require("./routers")

router.use(express.json())
router.use(express.urlencoded({extended: true}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("api/", router);

app.listen(8088)