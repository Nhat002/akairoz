import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  records: [],
  page: 1,
  perPage: 5,

  pageCount: Ember.computed('sortedRecords.[]', function() {
    let records = this.get('sortedRecords');
    let perPage = this.get('perPage') || 15;
    return Math.ceil(records.get('length') / perPage);
  }),
  recordSortingOrder: ['createdAt:desc'],
  sortedRecords: Ember.computed.sort('records','recordSortingOrder'),
  paginatedRecords: Ember.computed('page', 'sortedRecords.[]', function() {
    let page = this.get('page') || 1;
    let perPage = this.get('perPage') || 1;
    let records = this.get('sortedRecords');
    let startIndex = (page - 1) * perPage;
    let stopIndex = startIndex + perPage;
    return records.slice(startIndex, stopIndex);
  }),
});
