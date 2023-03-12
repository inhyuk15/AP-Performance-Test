module.exports = {
    friendlyName: 'deleteSpeedTest',
    description: 'Delete a new SpeedTest',
    inputs: {
      sessionId: {
        type: 'string',
        required: true,
        description: 'session id for SpeedTest'
      },
    },
    exits : {
      success: {
        statusCode: 200,
        outputExample: [{id: 1, sessionId: '2', locationId: '2', timeStamp: 1678087702136},],
        description: 'SpeedTest deleted'
      },
      invalid: {
        statusCode: 404,
        description: 'The provided inputs invalid'
      }
    },
    
    fn: async ({sessionId}, exits) => {
      try {
        const results = await SpeedTest.destroy({
          sessionId
        })
        return exits.success(results);
      } catch (error) {
        return exits.serverError(error);
      }
    }
  };
  
  