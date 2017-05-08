import ENV from 'fyp-app/config/environment';

export function initialize() {
  ENV.APP.Venus = 'http://localhost:8201';
  ENV.APP.Hera = 'http://localhost:8221';
  ENV.APP.BenchmarkAPI = 'http://localhost:8000';
  ENV.APP.currentRoute = 'index';
};
export default {
  name: 'global-variables',
  initialize: initialize
};
