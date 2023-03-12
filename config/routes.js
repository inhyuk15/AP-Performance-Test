module.exports.routes = {
  '/': {
    view: 'pages/homepage',
  },
  // user
  'get /users': { action:'user/find-all' },
  'post /users': { action: 'user/create' },
  'delete /user/:sessionId' : { action: 'user/delete' },

  // speedTest
  'get /speedtests': { action:'speedtest/find-all' },
  'post /speedtest': { action: 'speedtest/create' },
  'delete /speedtest/:sessionId' : { action: 'speedtest/delete' },
  'delete /speedtests': { action: 'speedtest/delete-all' },
};
