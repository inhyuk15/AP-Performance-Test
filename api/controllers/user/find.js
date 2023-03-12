const SpeedTest = require("../../models/SpeedTest");

module.exports = {


  friendlyName: 'Find',


  description: 'Find user.',


  inputs: {

  },


  exits: {

  },

  fn: async (inputs, exits) => {
    try {
      const users = await SpeedTest.findOne({sessionId: 'string'});
      return exits.success(users);
    } catch (error) {
      return exits.serverError(error);
    }
  },


};
