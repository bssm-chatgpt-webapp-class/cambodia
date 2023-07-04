const mysql = require("mysql2/promise");
require("../config/env")
const {dbHost, dbUser, dbPassword, dbName} = require("../config/env");

let connection;

const connect = async () => {
    if (!connection) {
        connection = await mysql.createConnection({
            host: dbHost,
            user: dbUser,
            password: dbPassword,
            database: dbName,
        });
    }
};

const getConnection = () => {
    return connection;
};

module.exports = { connect, getConnection };