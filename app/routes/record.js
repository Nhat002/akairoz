import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('record',params.record_id);
  },
  redirect(model, transition) {
    Ember.Logger.log("model transition: ", model);
    if (model.get('length') === 1) {
      this.transitionTo('record.index', model.get('firstObject'));
    }
  }
});
