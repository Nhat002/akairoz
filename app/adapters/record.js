import DS from 'ember-data';
import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'fyp-app/config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.APP.Venus,
  namespace: "v1",
});