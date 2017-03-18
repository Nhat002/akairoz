import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeCreateResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(...arguments);
  },
  serialize(snapshot, options) {
    var json = this._super(...arguments);
    // console.log(json.data.attributes);
    // delete json.data.attributes['created-at'];
    // delete json.data.attributes['ended-at'];
    // delete json.data.attributes.status;
    // delete json.data.attributes.result;
    json.data.attributes.uid = json.data.attributes['user-id'];
    delete json.data.attributes['user-id'];
    console.log(json);
    return json;
  },
});
