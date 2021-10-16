import debug from 'debug';
import express from 'express';
import logger from 'morgan-debug';
import path from 'path';
const loginfo = debug('drsa-config:express');
const init = ctx => {
  const app = express();
  app.use('/ping', (req, res) => res.json({ ping: 'pong' }));
  app.use(logger('drsa-config:http', 'dev'));
  app.use('/assets', express.static(path.join(__dirname, '../../configs')));
  app.use('/configs', express.static(path.join(__dirname, '../../configs')));
  loginfo('routes setup');
  return Promise.resolve({ ...ctx, app });
};
module.exports = init;
