const db = require  ('../models/assetModels.js')

const tableController = {};



tableController.getTables = (req, res, next) => {
    console.log('at getTables controller');
    const query = "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';";
    const pTables = new Promise((resolve, reject) => {
      const result = db.query(query);
      return resolve(result);
    })
      .then((tables) =>{
          console.log(Array.isArray(tables.rows));
          res.locals.tables = tables.rows;
        return next();
      })
      .catch((error) => {console.log(error);});
  };



module.exports = tableController;