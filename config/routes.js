module.exports.routes = {
  '/': {
    view: 'pages/homepage',
  },
  'get /users': { action:'user/find-all' },
  'post /users': { action: 'user/create' },
  'delete /user/:sessionId' : { action: 'user/delete' },
  'get /speedtests': { action:'speedtest/find-all' },
  'post /speedtest': { action: 'speedtest/create' },
  // ...
  // 'get /swagger' : {
  //   view: 'swagger',
  //   locals: {
  //     layout: 'layouts/layout'
  //   }
  // },
};
