require('dotenv/config');
const mysql = require('mysql');

var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

connection.connect((err) => {
	if(err)
	{
		console.log('Failed to connect');
	}
	else
		console.log('Connected to DB');
});

module.exports = connection;
