const express = require('express')
const router = express.Router()
const {getConnection} = require("../models/connector")
const jwt = require('jsonwebtoken');
const {jwtSecret} = require("../config/env");
const bcrypt = require("bcrypt");


const salt = 6;
router.post('/signup', async (req, res) => {
    const { email, pw } = req.body;
    const encrypted = await bcrypt.hash(pw, salt);
    getConnection().execute(`INSERT user(email, pw) VALUES(?, ?)` ,
        [email, encrypted]);
    res.json("asdflksadjfkldsa")
});

router.post("/signin", async (req, res) => {
    const { email, pw } = req.body;
    const encrypted = await bcrypt.hash(pw, salt);
    const [result] = await getConnection().execute(`SELECT * FROM user WHERE email = ? and pw = ?`, [
        email, encrypted
    ]);
    if (result.length === 0) {
        return res.json("no user")
    }

    const token = jwt.sign({id:result[0].id, email, expired: "12.0"},  jwtSecret);
    return res.json({token})
});


module.exports = router;
