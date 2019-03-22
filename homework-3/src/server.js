const express = require('express')
const app = express()
const router = require('./routes/router');
const bodyParser = require('body-parser');

const errorHandler = function(err, req, res, next){
    res.send('something bad')
}

  const startServer = port => {
    app
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use('/', router)
    // .use(errorHandler)
    app.listen(port);
  
    console.log('Server was started at http://localhost:' + port);
  };
  
module.exports = startServer;
