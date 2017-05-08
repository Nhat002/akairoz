import Ember from 'ember';

export default Ember.Controller.extend({
  isEnded : Ember.computed('record.{}', function(){
    let record = this.get('record');
    let endedAt = record.get('endedAt') || "";
    return endedAt !== "";
  }),
  runParams: Ember.computed('record.{}', function(){
    let record = this.get('record');
    return record.get('runParams');
  }),
  projectStatus: Ember.computed('record.{}', function(){
    let record = this.get('record');
    if (record.get('status') === 'running') {
      return 'info';
    }
    if (record.get('status') === 'pending') {
      return 'warning';
    }
  }),
});
