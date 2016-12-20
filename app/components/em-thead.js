/*
@component em-thead
@description
Presents `<thead></thead>` with provided `{array} headers`
@usage
{{em-thead headers=headers sortDirection=sort_direction}}
*/
import Ember from 'ember';
export default Ember.Component.extend({
  tagName: 'thead',
  headers: [],
  sortDirection: null,

  dataToggle: Ember.computed('tooltip', function() {
    let title = this.get('tooltip');
    if (title) {return 'tooltip';}
  }),

  actions: {
    sort(prop) {
      this.sendAction('sort', prop);
    }
  }
});

