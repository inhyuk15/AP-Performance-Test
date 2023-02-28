module.exports.routes = {
  'GET /users': 'UserController.getUsers',
  'POST /users': 'UserController.createUser',
  'GET /speedtests/:userId': 'SpeedTestController.getSpeedTestsByUser',
  // ...
};
