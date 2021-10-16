const debug = require('debug');
require('../env');
const loginfo = debug('drsa-config:env');
const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const init = () => {
  const isProduction = process.env.NODE_ENV === PRODUCTION;
  loginfo(`running ${isProduction ? PRODUCTION : DEVELOPMENT} mode`);
  const httpServer = { host: process.env.HOST, port: Number(process.env.PORT) };
  const config = { isProduction, httpServer };
  return Promise.resolve({ config });
};
module.exports = init;
