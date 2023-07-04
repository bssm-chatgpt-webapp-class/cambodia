require("dotenv").config()

console.log(process.env.DB_HOST)

module.exports = {
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_Password,
    dbUser: process.env.DB_User,
    dbName: process.env.DB_Name,
    dbPort: process.env.DB_Port,
    jwtSecret: process.env.JWT_SECRET
}