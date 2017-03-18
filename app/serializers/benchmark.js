import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    let data = [];
    payload.result.forEach(function(item, index, enumerable) {
      let dataElement = {};
      Ember.set(dataElement,"attributes",item);
      Ember.set(dataElement,"type","benchmark");
      Ember.set(dataElement,"id", index);
      data.push(dataElement);
    })
    payload.data = data;
    delete payload.result;
    return this._super(...arguments);
  },
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },
});
