import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  classNames: ['fa'],
  classNameBindings: ['nameClass','fixedWidth:fa-fw', 'spin:fa-spin'],
  nameClass: Ember.computed('name', function(){
    let name = this.get('name');
    return `fa-${name}`;
  }),
});
