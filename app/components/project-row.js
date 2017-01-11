import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['tr'],
  name: Ember.computed('rowData', function(){
    let rowData = this.get('rowData');
    return rowData.get('name');
  }),
  normalizedIndex: Ember.computed('index', 'page',  function() {
    let page = this.get('page') || 1;
    let perPage = this.get('perPage') || 10;
    return this.get('index') + 1 + (page - 1) * perPage;
  }),
});
