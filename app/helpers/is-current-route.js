import Ember from 'ember';
import ENV from 'fyp-app/config/environment';

export function isCurrentRoute(params/*, hash*/) {
  let val = params[0];
  return val === ENV.APP.currentRoute ? "active" : '';
}

export default Ember.Helper.helper(isCurrentRoute);
