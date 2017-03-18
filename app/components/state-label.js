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
    'complete':'success',
    'running':'info',
    'pending':'warning',
    'canceled':'danger',
  },
  colorClass: Ember.computed('state', function(){
    let states = this.get('states');
    let textLabel = states[this.get('state') || 'canceled'];
    return `text-${textLabel}`;
  }),
  running: Ember.computed('state', function(){
    let label = this.get('state') || 'pending';
    return label == 'running';
  }),
  completed: Ember.computed('state', function(){
    let label = this.get('state') || 'pending';
    return label == 'complete';
  }),
  canceled: Ember.computed('state', function(){
    let label = this.get('state') || 'pending';
    return label == 'canceled';
  }),
});
