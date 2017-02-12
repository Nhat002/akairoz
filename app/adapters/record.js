import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:8080',
  namespace: 'v1',
  buildUrl (modelName, id, snapshot, requestType, query) {
    let userId = query.userId;
    return `${this.host}/api/${this.namespace}/records?userId=${userId}`;
  }
});
