module.exports = {
    friendlyName: 'deleteSpeedTestAll',
    description: 'Delete All of SpeedTests',
    inputs: {},
    exits : {
      success: {
        statusCode: 200,
        outputExample: 1, // 삭제된 데이터의 개수
        description: 'SpeedTest deleted'
      },
      invalid: {
        statusCode: 404,
        description: 'The provided inputs invalid'
      }
    },
    
    fn: async (inputs, exits) => {
        try {
          const count = await SpeedTest.destroy({});
          return exits.success(count);
        } catch (error) {
          return exits.serverError(error);
        }
      },
  };
  
  