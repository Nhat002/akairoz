import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isCurrent:active', 'isPage::disabled'],
  isCurrent: Ember.computed('currentPage', 'page', function(){
    return this.get('currentPage') == this.get('page');
  }),
  isPage: Ember.computed('page', function(){
    return !!parseInt(this.get('page'),10);
  }),
  actions: {
    goToPage: function(page){
      this.get('onSelect')(page);
    }
  }
});
