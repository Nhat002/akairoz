import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('records', { resetNamespace: true },function(){
    this.route('record', { resetNamespace: true, path: ':record_id'}, function(){
      this.route('payment');
    });
    this.route('new');
  });
  this.route('account');
  this.route('login');
  this.route('logout');
});

export default Router;
