import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log(payload)
    return this._super(...arguments)
  }

});
