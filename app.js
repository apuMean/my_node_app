'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var mongoose=require('./config/dbConfig')
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};




SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // enable SwaggerUI
  app.use(swaggerExpress.runner.swaggerTools.swaggerUi());

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 5050;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
