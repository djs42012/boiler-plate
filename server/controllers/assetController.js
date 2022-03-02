const db = require  ('../models/assetModels.js')

const assetController = {};


assetController.getAssets = (req, res, next) => {
    console.log('at getAssets controller');
    const query = 'SELECT * FROM passwords;';
    const assets = new Promise((resolve, reject) => {
      const result = db.query(query);
      return resolve(result);
    })
      .then((data) =>{
        console.log(data);
        res.locals.passwrords = data.rows;
        return next();
      })
      .catch((error) => {console.log(error);});
  };



module.exports = assetController;