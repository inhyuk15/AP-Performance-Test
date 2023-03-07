module.exports = {
  friendlyName: 'deleteUser',
  description: 'Delete a new user',
  inputs: {
    sessionId: {
      type: 'string',
      required: true,
      description: 'session id for user'
    },
  },
  exits : {
    success: {
      statusCode: 200,
      outputExample: [{id: 1, sessionId: '2', locationId: '2', timeStamp: 1678087702136},],
      description: 'user deleted'
    },
    invalid: {
      statusCode: 404,
      description: 'The provided inputs invalid'
    }
  },
  
  fn: async ({sessionId}, exits) => {
    try {
      const results = await User.destroy({
        sessionId
      })
      return exits.success(results);
    } catch (error) {
      return exits.serverError(error);
    }
  }
};

