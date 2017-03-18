/*
@component benchmark-page
@description
a page of benchmark
@usage
{{benchmark-page pageData=pageData index=index}}
*/
import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',
  algoName: Ember.computed('pageData', function(){
    let pageData = this.get('pageData');
    return pageData.get('algoName').replace('_', ' ');
  }),
  timePercent: Ember.computed('pageData','maxTime', function(){
    let pageData = this.get('pageData');
    let maxTime = this.get('maxTime');
    return pageData.get('time') * 100 / maxTime;
  }),
  accuracyPercent: Ember.computed('pageData','maxAccuracy', function(){
    let pageData = this.get('pageData');
    let maxAccuracy = this.get('maxAccuracy');
    return pageData.get('accuracy') * 100/ maxAccuracy;
  }),
  pricePercent: Ember.computed('pageData','maxPrice', function(){
    let pageData = this.get('pageData');
    let maxPrice = this.get('maxPrice');
    return pageData.get('price') * 100/ maxPrice;
  }),

});
