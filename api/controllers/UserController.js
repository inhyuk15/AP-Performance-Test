module.exports = {
    getUsers: async function(req, res) {
      try {
        const users = await User.find();
        return res.json(users);
      } catch (error) {
        return res.serverError(error);
      }
    },
  
    // createUser: async function(req, res) {
    //   try {
    //     const user = await User.create(req.body).fetch();
    //     return res.json(user);
    //   } catch (error) {
    //     return res.serverError(error);
    //   }
    // },
  
    // getSpeedTestsByUser: async function(req, res) {
    //   try {
    //     const userId = req.params.userId;
    //     const speedTests = await SpeedTest.find({ user: userId });
    //     return res.json(speedTests);
    //   } catch (error) {
    //     return res.serverError(error);
    //   }
    // },
  
    // ...
  };
  