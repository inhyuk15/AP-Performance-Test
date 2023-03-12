
const securityConfig = require('../security');
const datastoreConfig = require('../datastores');
const modelConfig = require('../models');
// const swaggerConfig = require('../swagger');

module.exports = {
  port: process.env.PORT || 1337,
  environment: process.env.NODE_ENV || 'production',
  explicitHost: '0.0.0.0',

  datastores: Object.assign({}, datastoreConfig.datastores, {

  }),
  models: modelConfig.models,
  // models: {
  //   migrate: 'safe',
  //   // cascadeOnDestroy: false,
  // },

  blueprints: {
    shortcuts: false,
  },

  security: securityConfig.security,

  session: {

    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    },

  },

  sockets: {

    onlyAllowOrigins: [
      // 'http://*', 'https://*'
      'http://222.234.254.143:1337',
      'http://3.34.122.225:1337',
      // 'http://168.188.234.58:1337',
    ],
  },

  log: {
    level: 'debug'
  },

  http: {

    cache: 365.25 * 24 * 60 * 60 * 1000, // One year

    trustProxy: true,

  },

  // actions2swagger: swaggerConfig.swagger
}