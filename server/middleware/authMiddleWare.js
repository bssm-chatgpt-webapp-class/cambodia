const jwt = require('jsonwebtoken');
const {getConnection} = require("../models/connector");

const validateToken = (req, res, next) => {
    try{
        const token = req.headers.authorization
        const data = jwt.verify(token, process.env.JWT_SECRET)

        const user = getConnection().execute(`SELECT * FROM USER where id=?`, [data.id]);

        req.user = user;
        next()
    }catch(err){
        return res.status(410).json(err)
    }
}

module.exports = validateToken;