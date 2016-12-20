import Ember from 'ember';

export default Ember.Controller.extend({
  projects: Ember.computed.alias('model'),
  queryParams: ['page'],
  page: 1,
  perPage: 15,
  headers: [
    { name: ' ', size: 1},
    { name: 'Name', size:3},
    { name: 'Model ID', size: 3},
    { name: 'Status', size:3},
    { name: 'Payment Status', size:3},
  ]
});
