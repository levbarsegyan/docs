import axios from 'axios';
import initHttp from '../init/http';
import initRouter from '../init/router';
const config = {
  isProduction: false,
  httpServer: {
    host: 'localhost',
  },
};
let server;
beforeAll(() =>
  initRouter({ config })
    .then(initHttp)
    .then(({ httpServer }) => (server = httpServer)),
);
afterAll(() => server.close());
describe('server', () => {
  it('should serve partners', () => axios.get(`${server.url}/configs/partners.json`));
  it('should serve E2E', () => axios.get(`${server.url}/configs/E2E/settings.json`));
});
