const express = require('express')
const router = express.Router()
const {getConnection} = require("../models/connector")
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    const { email, pw } = req.body;
    getConnection().execute(`INSERT user(email, pw) VALUES(?, ?)` ,
        [email, pw]);
    res.json("asdflksadjfkldsa")
});

router.post("/signin", async (req, res) => {
    const { email, pw } = req.body;
    const [result] = await getConnection().execute(`SELECT * FROM user WHERE email = ? and pw = ?`, [
        email, pw
    ]);
    if (result.length === 0) {
        return res.json("no user")
    }

    const token = jwt.sign({id:result[0].id, email, expired: "12.0"},  process.env.JWT_SECRET);
    return res.json({token})
});

module.exports = router;
