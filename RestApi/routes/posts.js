const express = require('express');
router = express.Router();
const PostSchema = require('../models/posts');
const mysqlConnection = require('../connection');
const bodyParser = require('body-parser');


router.post('/post', (req, res) => {
	var post = req.body;
	console.log(`INSERT INTO Posts(Id, Title, Body, Date) VALUES(NULL, "${post.Title}", "${post.Body}", CURRENT_TIMESTAMP)`);
	mysqlConnection.query(`INSERT INTO Posts(Id, Title, Body, Date) VALUES(NULL, "${post.Title}", "${post.Body}", CURRENT_TIMESTAMP)`, (err, rows, field) => {
		console.log(rows);
	});
});

router.get('/post', (req, res) => {
	mysqlConnection.query('SELECT * FROM Posts', (err, rows, field) => {
		if(err)
			throw err;
		res.send(rows);
	});
});

router.get('/post/:Id', (req, res) => {
	mysqlConnection.query('SELECT * FROM Posts WHERE Id = ?', [req.params.Id], (err, rows, field) => {
		if (err)
			throw err;
		else
			res.send(rows);
	});
});

router.delete('/post/(:Id)', (req, res) => {
	console.log(req.params.Id);
	mysqlConnection.query('DELETE FROM Posts WHERE Id = ?', [req.params.Id], (err, rows, fields) => {
		if (err)
			throw err;
		else
		{
			console.log(req.params.Id);
			res.send('Deleted Successfully');
		}
	});
});

router.patch('/post', (req, res) => {
	mysqlConnection.query('UPDATE Posts SET Title = ?, Body = ? WHERE Id = ?', [req.body.Title, req.body.Body, req.body.Id], (err, rows, fields) => {
		if (err)
			throw err;
		else
			res.send(rows);
	});
});
module.exports = router;
