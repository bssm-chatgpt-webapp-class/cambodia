const jwt = require('jsonwebtoken');
const {getConnection} = require("../models/connector");
const {jwtSecret} = require("../config/env");

const validateToken = (req, res, next) => {
    try{
        const token = req.headers.authorization
        const data = jwt.verify(token, jwtSecret)

        const user = getConnection().execute(`SELECT * FROM USER where id=?`, [data.id]);

        req.user = user;
        next()
    }catch(err){
        return res.status(410).json(err)
    }
}

module.exports = validateToken;