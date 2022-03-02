const { Pool } = require('pg');

const PG_URI = 'postgres://pxgvntmu:0JupAlu4ItmveG9FHeYjFhzgP71Q_bMy@castor.db.elephantsql.com/pxgvntmu';

const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
