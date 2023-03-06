module.exports = {
  friendlyName: 'createUser',
    description: 'Create a new user',
    inputs: {
      sessionId: {
        type: 'string',
        required: true,
        description: 'session id for user'
      },
      locationId: {
        type: 'string',
        required: true,
        description: 'location id for user'
      }
    },
    exits : {
      success: {
        description: 'New user was created'
      },
      invalid: {
        description: 'The provided inputs invalid'
      }
    },
    
    // swagger: {
    //   description: 'Returns created user',
    //   response: {
    //     200: {
    //       description: 'user created',
    //       schema: {
    //         type: 'array',
    //         items: {
    //           $ref: '#/definitions/User'
    //         }
    //       }
    //     },
    //     404: {
    //       description: 'request invalid'
    //     }
    //   }
    // },
    fn: async ({sessionId, locationId}, exits) => {
      try {
        const results = await User.create({
          sessionId,
          locationId,
        })
        .fetch();
        return exits.success(results);

      } catch (error) {
        return exits.serverError(error);
      }
    },

};
