const express = require('express');
const path = require('path');
const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                                 check paths                                */
/* -------------------------------------------------------------------------- */

const assetController = require(path.resolve(__dirname,'../controllers/assetController'));


/* -------------------------------------------------------------------------- */
/*                                    etc etc.                                */
/* -------------------------------------------------------------------------- */
router.get('/', assetController, (req, res) => {

});

module.exports = router;