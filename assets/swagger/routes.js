module.exports.swagger = {
    basePath: '/v1',
    swagger: '2.0',
    info: {
      title: 'Your API Title',
      description: 'Your API Description',
      version: '1.0'
    },
    host: 'localhost:1337',
    schemes: ['http'],
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    },
    security: [
      {
        jwt: []
      }
    ],
    definitions: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64'
          },
          name: {
            type: 'string'
          },
          email: {
            type: 'string'
          }
        }
      },
      CreateUser: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      }
    }
  };
  