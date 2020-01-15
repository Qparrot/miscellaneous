# HeaderAndFooterAsImage

## Goal

Add the backend server that show the previous comments and allows the addition of new comments:
the project is available here: [showcase](www.quentinparrot.com/NodeJSAndMySQL).

![image](./headerAndFooterAsimage.png "example")

## Problems

- I had a lot of difficulty to learn mysql.
- I couldn't use phpmyadmin from lampp, so I learn the basic of command line for mysql:
	- CREATE DATABASE databaseName;
	- CREATE TABLE tableName (
		userID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
		userName VARCHAR(40) NOT NULL,
		);

	- USE database;
	- SHOW ALL DATABASES;
	- DESCRIBE table;
	- INSERT INTO (..., ...) VALUES (?, ?);
	- DROP DATABASE database;
	- SELECT * FROM database.table;

- I needed to use proxyPass in order to make it work on my raspberrypi.[ref 1](https://www.leowkahman.com/2018/01/09/setup-nodejs-with-apache-proxypass-on-raspberry-pi/).
- I find where to add these line within this post: https://stackoverflow.com/questions/14259321/apache-node-js-mod-proxy-how-to-route-one-domain-to-3000-and-another-to-8#14260011
- I created a bash script to launch the nodejs server when the raspberry boot.


## Ressources

- https://www.youtube.com/watch?v=SmgpRNyR3bo
- https://www.leowkahman.com/2018/01/09/setup-nodejs-with-apache-proxypass-on-raspberry-pi/


