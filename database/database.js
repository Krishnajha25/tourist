const { createPool } = require('mysql')
require('dotenv').config()

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    connectionLimit: 10
})

pool.on('acquire', function (connection) {
    console.log('Connection %d acquired', connection.threadId);
});

module.exports = pool