// config/express.js
var express = require('express');
var consign = require('consign');

module.exports = function() {
  var app = express();
  

  
  
  // variável de ambiente
  app.set ( 'port' , 3000 );
  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  
  // middleware
  app.use ( express.static( './public' ));
  
   
  consign({cwd: 'app'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);   
    
  return app;
};
