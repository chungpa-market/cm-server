const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '../html/product-detail.html'));
});

module.exports = router;