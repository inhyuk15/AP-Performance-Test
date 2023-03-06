module.exports = {
  friendlyName: 'Find User',
  description: 'Find a new user',
  inputs: {},
  exits : {
    success: {
      description: 'user was Found',
      statusCode: 200,
      outputExample: [{id: 1, sessionId: '2', locationId: '2'},]
    },
    invalid: {
      description: 'The provided inputs invalid',
      statusCode: 404,
      responseType: 'notFound'
    }
  },
  
  fn: async (inputs, exits) => {
    try {
      const users = await User.find();
      return exits.success(users);
    } catch (error) {
      return exits.serverError(error);
    }
  },
};
