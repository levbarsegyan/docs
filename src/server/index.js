import debug from 'debug';
import { reduce } from 'ramda';
import initConfig from './init/config';
import initHttp from './init/http';
import initRouter from './init/router';
const loginfo = debug('drsa-config');
const ressources = [initRouter, initHttp];
const initRessources = ctx => reduce((acc, initFn) => acc.then(initFn), Promise.resolve(ctx), ressources);
initConfig()
  .then(initRessources)
  .then(() => loginfo('server started'))
  .catch(console.error); 
