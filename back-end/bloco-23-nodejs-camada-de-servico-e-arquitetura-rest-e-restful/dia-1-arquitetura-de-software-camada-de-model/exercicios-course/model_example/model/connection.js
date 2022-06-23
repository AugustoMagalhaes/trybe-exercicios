require('dotenv').config();

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: process.env.HOST_DB,
	user: process.env.USER_DB,
	password: process.env.PASSWORD_DB,
	database: process.env.DATABASE_DB, 
});

module.exports = connection;