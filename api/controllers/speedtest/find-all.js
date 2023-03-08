module.exports = {
    friendlyName: 'Find SpeedTest',
    description: 'Find a new speedTest',
    inputs: {},
    exits : {
      success: {
        description: 'speedTest was Found',
        statusCode: 200,
        outputExample: [{floorNumber: '1', roomNumber: '1', sessionId: '2', locationId: '2'},]
      },
      invalid: {
        description: 'The provided inputs invalid',
        statusCode: 404,
        responseType: 'notFound'
      }
    },
    
    fn: async (inputs, exits) => {
      try {
        const speedtests = await SpeedTest.find();
        return exits.success(speedtests);
      } catch (error) {
        return exits.serverError(error);
      }
    },
  };
  