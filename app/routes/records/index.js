import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('record',{'userId': '1u'});
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.controllerFor('records.index').set('records', model);
  }
});
