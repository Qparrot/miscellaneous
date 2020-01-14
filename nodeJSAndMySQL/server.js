const http = require('http');
const fs = require('fs');
const con = require('./DBConnection');

const hostname ='127.0.0.1';
const port = '8080';

const server = http.createServer((req, res) => {
	if(req.method === 'GET' && req.url === '/')
	{
		res.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream('./index.html').pipe(res);

		var conn = con.getConnection();

		conn.query('SELECT * FROM test.comments', function(error, results, fields)
			{
				if(error)
					throw error;
				results.forEach((comment) => {
					console.log(comment);
				});
			});
			conn.end();
	}
	else if(req.method === 'GET' && req.url === '/style.css')
	{
		res.writeHead(200, {'Content-Type': 'text/css'});
		fs.createReadStream('./style.css').pipe(res);
	}
	else if(req.method === 'GET' && req.url === '/header.png')
	{
		res.writeHead(200, {'Content-Type': 'image/png'});
		fs.createReadStream('./images/header.png').pipe(res);
	}
	else if(req.method === 'GET' && req.url === '/footer.png')
	{
		res.writeHead(200, {'Content-Type': 'image/png'});
		fs.createReadStream('./images/footer.png').pipe(res);
	}
	else if(req.method === 'GET' && req.url === '/functions.js')
	{
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		fs.createReadStream('./functions.js').pipe(res);
	}
	else if(req.method === "GET" && req.url === '/home')
	{
		res.writeHead(200, {'Content-Type': 'application/json'});
		var conn = con.getConnection();

		conn.query('SELECT * FROM test.comments', function(error, results, fields)
		{
			if(error)
				throw error;
			var comments = JSON.stringify(results);
			
			res.end(comments);
		});
	}
	else if (req.method === 'POST' && req.url === '/insert')
	{
		res.writeHead(200, {'Content-Type': 'text/plain'});
		var content = '';
		req.on('data', function(data) {
			content += data;
			var obj = JSON.parse(content);
			console.log("The userName is:" + obj.name);
			console.log("The commentBody is:" + obj.commentBody);

			var conn = con.getConnection();
			conn.query("INSERT INTO test.comments (comments.userName, comments.date, comments.comment) VALUES (?, ?, ?)", 
				[obj.name, new Date().toISOString(), obj.commentBody], function(error, results, fields)
				{
					if (error)
						throw error;
					console.log("Success!");
				});
			conn.end();
			res.end("Success!");
		});
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
