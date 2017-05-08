import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  cookies: Ember.inject.service(),
  beforeModel() {
    let cookiesService = this.get('cookies');
    cookiesService.clear('userId');
    this.get('session').invalidate();
  }
});
