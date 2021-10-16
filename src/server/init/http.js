const debug = require('debug');
const loginfo = debug('drsa-config:http');
const getUrl = server => `http:
const init = ctx => {
  const { app, config: { httpServer: { host = 'localhost', port } } } = ctx;
  return new Promise((resolve, reject) => {
    const server = app.listen(port, host, err => {
      if (err) return reject(err);
      const url = getUrl(server);
      loginfo(`Server started on ${url}`);
      server.url = url;
      return resolve({ ...ctx, httpServer: server });
    });
  });
};
module.exports = init;
