const express = require('express');
const router = express.Router();


router.get( '/', (req, res) => {
	res.send('you are on user main page');
});

module.exports = router;
