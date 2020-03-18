/* ====================================
 * 	NECCESSARY PACKAGE
 * ================================= */

require('dotenv/config');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
/* ====================================
 * 	SQL CONNECTION
 * ================================= */

const connection = require('./connection');

/* ====================================
 * 	IMPORT ROUTES
 * ================================= */

const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');

/* ====================================
 * 	LAUNCH EXPRESS
 * ================================= */

const app = express();

/* ====================================
 * 	MIDDLEWARES
 * ================================= */
app.use(bodyParser.json());
app.use('/users', usersRoute);
app.use('/posts', postsRoute);

/* ====================================
 * 	ROUTES
 * ================================= */

app.get('/', (req, res) => {
	res.send('We are home');
});


app.get('/posts', (req, res) => {
	res.send('We are at the beach');
});

/* ====================================
 * 	SERVER  LAUNCHED AND LISTEN
 * ================================= */

app.listen(process.env.PORT, process.env.HOST, () => {
	console.log(`Running on ${process.env.HOST}:${process.env.PORT}.`);
});
