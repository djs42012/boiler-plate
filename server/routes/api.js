const express = require('express');
const path = require('path');
const router = express.Router();


const tableController = require(path.resolve(__dirname,'../controllers/tableController.js'));

router.get('/', tableController.getTables, (req, res) => {
    console.log('at table router');
    console.log(res.locals.tables)
    return res.status(200).json(res.locals.tables);
});

module.exports = router;