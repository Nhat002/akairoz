import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let id = this.modelFor('record').get('id');
    return this.store.findRecord('record', id, { reload: true });
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.controllerFor('record.index').set('record', model);
  }
});
