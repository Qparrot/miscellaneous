const express = require('express');
const PostSchema = {
	'Id': 'INT',
	'Title': 'VARCHAR(25)',
	'Description': 'VARCHAR(255)',
	'Date': 'DATETIME',
	'param_Id': 'PRIMARY KEY NOT NULL AUTO_INCREMENT',
	'param_Title': 'NOT NULL',
	'param_Body': 'NOT NULL',
	'param_Date': 'NOT NULL DEFAULT CURRENT_TIMESTAMP'
};

module.exports = PostSchema;
