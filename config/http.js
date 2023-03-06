module.exports.http = {
  customMiddleware: function (app) {
    var swagger = require('sails-hook-swagger/node_modules/swagger-node-runner');
    var express = require('sails-hook-swagger/node_modules/express');
    var config = require('../swagger/config');

    swagger.create(config, function (err, runner) {
      if (err) {
        throw err;
      }

      app.use(runner.expressMiddleware());

      var swaggerUi = require('sails-hook-swagger/node_modules/swagger-tools/middleware/swagger-ui');
      var swaggerUiMiddleware = swaggerUi({
        swaggerUi: '/swagger.json',
        apiDocs: '/swagger.json'
      });

      app.use('/docs', swaggerUiMiddleware);
    });
  }
};
