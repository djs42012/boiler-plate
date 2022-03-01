const path = require('path');
const express = require('express');

const app = express();
const PORT = 3003;


/* -------------------------------------------------------------------------- */
/*                               require routers                              */
/* -------------------------------------------------------------------------- */

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
// const apiRouter = require(path.join(__dirname, 'routes/api.js'));



/* -------------------------------------------------------------------------- */
/*                        handle partsing request body                        */
/* -------------------------------------------------------------------------- */

// app.use(express.json());
// app.use(express.urlencoded({extended : true}));


/* -------------------------------------------------------------------------- */
/*                            define Route Handlers                           */
/* -------------------------------------------------------------------------- */

// app.use('/api', apiRouter);


/* -------------------------------------------------------------------------- */
/*                             serve static files                             */
/* -------------------------------------------------------------------------- */
//! TBD
//app.use('/assets', express.static(path.join(__dirname,'../client/assets/')));


/* -------------------------------------------------------------------------- */
/*                   route handler to respond with main app                   */
/* -------------------------------------------------------------------------- */

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });


/* -------------------------------------------------------------------------- */
/*        catch-all route handler for any requests to an unknown route        */
/* -------------------------------------------------------------------------- */

// app.all('*', (req, res) => {
//   console.log('Page not found');
//   return res.status(404).send('Page not found. Click <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a> for more information.')
// });


/* -------------------------------------------------------------------------- */
/*                   configure express global error handler                   */
/* -------------------------------------------------------------------------- */

// app.use(defaultErrorHandler);
// function defaultErrorHandler(err, req, res, next){
//   const defaultErr = 
//   {
//     log : 'Express error handler caught unknown middleware error',
//     status : 400,
//     message : { err: 'An error occured'}
//   };
//   const errorObj = Object.assign(defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).send(JSON.stringify(errorObj.message));

// }


/* -------------------------------------------------------------------------- */
/*                                start server                                */
/* -------------------------------------------------------------------------- */
