import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  records: Ember.computed.alias('model'),
  page: 1,
  perPage: 15,

  pageCount: Ember.computed('records.[]', function() {
    let records = this.get('records');
    let perPage = this.get('perPage') || 15;
    return Math.ceil(records.get('length') / perPage);
  }),
});
