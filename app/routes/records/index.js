import Ember from 'ember';
import ENV from 'fyp-app/config/environment';

export default Ember.Route.extend({
  cookies: Ember.inject.service(),
  model() {
    let cookiesService = this.get('cookies');
    let id = cookiesService.read("userId");
    return this.store.query('record',{'userId': id});
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.controllerFor('records.index').set('records', model);
  }
});
