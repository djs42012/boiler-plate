const path = require('path');

/* -------------------------------------------------------------------------- */
/*                                 check paths                                */
/* -------------------------------------------------------------------------- */

const db = require(path.resolve(__dirname, '../models/assetModels.js'));

const assetController = {};

/* -------------------------------------------------------------------------- */
/*                                   etc etc                                  */
/* -------------------------------------------------------------------------- */

assetController.getAssets = (req, res, next) => {

};

module.exports = assetController;