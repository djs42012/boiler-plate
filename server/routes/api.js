const express = require('express');
const path = require('path');
const router = express.Router();


const assetController = require(path.resolve(__dirname,'../controllers/assetController'));

// router.get('/', assetController, (req, res) => {

// });

module.exports = router;