import ENV from 'fyp-app/config/environment'

export function initialize() {
  ENV.APP.backend = 'http://localhost:8080/v1';
  ENV.APP.currentRoute = 'index';
};
export default {
  name: 'global-variables',
  initialize: initialize
};
