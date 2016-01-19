// config/express.js
var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');


module.exports = function() {
  var app = express();
  

  
  
  // variável de ambiente
  app.set ( 'port' , 3000 );
  
  // middleware
  app.use ( express.static( './public' ));
  app.set('view engine', 'ejs');
  app.set('views', './app/views');
    //Method override
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
   
  consign({cwd: 'app'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);   
    
  return app;
};
