import DS from 'ember-data';
import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'fyp-app/config/environment'

// export default DS.Adapter.extend({
//   ajax: Ember.inject.service(),
//   query: function(store, type, query) {
//     return new Ember.RSVP.Promise(function(resolve, reject) {
//       Ember.$.getJSON(`${ENV.APP.backend}/record_collection`, query).then(function(data) {
//         resolve(data);
//       }, function(jqXHR) {
//         reject(jqXHR);
//       });
//     });
//   },
//   findRecord: function(store, type, id, snapshot) {
//     return new Ember.RSVP.Promise(function(resolve, reject) {
//       Ember.$.getJSON(`${ENV.APP.backend}/records/${id}`).then(function(data) {
//         resolve(data);
//       }, function(jqXHR) {
//         reject(jqXHR);
//       });
//     });
//   },
//   createRecord: function(store, type, snapshot) {
//     let data = this.serialize(snapshot, { includeId: false });
//     return new Ember.RSVP.Promise(function(resolve, reject) {
//       Ember.$.ajax({
//         type: 'POST',
//         url: `${ENV.APP.backend}/records`,
//         contentType: 'application/json',
//         data: JSON.stringify(data),
//         headers:{
//           "Access-Control-Allow-Origin":"*",
//         }
//       }).then(function(data) {
//         resolve();
//       }, function(jqXHR) {
//         jqXHR.then = null; // tame jQuery's ill mannered promises
//         // Ember.run(null, reject, jqXHR);
//         reject();
//       });
//     });
//     // return this.get('ajax').request(`${ENV.APP.backend}/records`, {
//     //   method: "POST",
//     //   data: JSON.stringify(data),
//     //   contentType: 'application/json',
//     //   headers:{
//     //     "Access-Control-Allow-Origin":"*",
//     //   },
//     // }).then(resolve).catch(reject);
//   },
// });

export default JSONAPIAdapter.extend({
  host: "http://localhost:8080",
  namespace: "v1",
});