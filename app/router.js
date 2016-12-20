import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', { resetNamespace: true },function(){
  	this.route('new');
  	this.route('project', { resetNamespace: true, path: ':project_id' }, function(){
        this.route('model');
        this.route('payment');
  	});
  });
  this.route('account');
});

export default Router;
