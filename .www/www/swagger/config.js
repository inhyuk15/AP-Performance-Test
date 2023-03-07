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
            type: 'string',
          },
          sessionId: {
            type: 'string'
          },
          locationId: {
            type: 'string'
          },
          timeStamp: {
            type: 'string'
          },
        }
      },
      CreateUser: {
        type: 'object',
        properties: {
					sessionId: {
							type: 'string'
					},
					locationId: {
							type: 'string'
					},
        }
      }
    }
  };
  