import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  userId:"",
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
