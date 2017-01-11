/*
@component state-label
@description
@usage
{{state-label state=state label=label}}
*/
import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['colorClass'],
  completeMessage:"",
  cancelMessage:"",
  incompleteMessage:"",
  states : {
    'completed':'success',
    'pending':'warning',
    'canceled':'danger',
  },
  colorClass: Ember.computed('state', function(){
    let states = this.get('states');
    let label = states[this.get('state') || 'canceled'];
    return `text-${label}`;
  }),
  completed: Ember.computed('state', function(){
    let label = this.get('state') || 'canceled';
    return label == 'completed';
  }),
  canceled: Ember.computed('state', function(){
    let label = this.get('state') || 'canceled';
    return label == 'canceled';
  }),
});
