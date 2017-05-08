import DS from 'ember-data';
import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: "http://localhost:8201",
  namespace: "v1",
});