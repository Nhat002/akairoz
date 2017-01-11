/*
@component content-pagination
@description
set up paging navigation
@usage
{{content-pagination totalPages=numOfPage page=page}}
*/
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  classNameBindings: ['isPaginate::hidden'],
  page: 1,
  totalPages: 1,
  edgeRange: 1,
  midRange: 3,
  currentPage: function(){
    var totalPages = this.get('totalPages');
    var page = this.get('page');
    if (!page || isNaN(page) || page < 1) return 1;
    if (page > totalPages) return totalPages;
    return Math.round(page);
  }.property('page', 'totalPages'),

  /* Reference
    [] = current page
    .  = ellipsis

    [1],2,3,4,5 - No ellipsis when <= 5
    [1],2,3,.,6 - Start ellipsis > 5
    1,2,3,[4],5,.,10
    1,.,4,[5],6,.,10
    1,.,6,[7],8,9,10
    1,.,5,[6],7,.,10
    1,.,8,9,[10]

  */
  pages: function(){
    var totalPages = this.get('totalPages');
    var page = this.get('currentPage');
    var results = [];
    for (var i=0; i<totalPages; i++){
      results.push(i+1);
    }

    var edgeRange = this.get('edgeRange');
    var midRange = this.get('midRange');
    var ellipsis = '&hellip;';

    var midRangeStartPage, midRangeEndPage;
    if (page >= 1 && page < midRange/2){
      midRangeStartPage = 1;
    } else if (page <= totalPages && page > totalPages - midRange/2){
      midRangeStartPage = totalPages - midRange + 1;
    } else {
      midRangeStartPage = page - Math.floor((midRange-1)/2);
    }
    midRangeEndPage = Math.min(midRangeStartPage + midRange - 1, totalPages);

    // splice values are indexes, always minus 1 of actual page number
    var spliced = [];

    var startEllipsisRange = midRangeStartPage - edgeRange;
    if (startEllipsisRange > 2){
      spliced = results.splice(edgeRange, startEllipsisRange-1, ellipsis);
    }

    var splicedLen = spliced.length;

    var endEllipsisRange = totalPages - midRangeEndPage - edgeRange;
    if (endEllipsisRange + 1 > 2){
      var start = midRangeEndPage - splicedLen;
      if (splicedLen) start += 1; // due to the extra ellipsis in the array
      results.splice(start, endEllipsisRange, ellipsis);
    }

    return results;
  }.property('currentPage', 'totalPages', 'edgeRange', 'midRange'),

  isPaginate: function(){
    return this.get('totalPages') > 1;
  }.property('totalPages'),

  isPrevDisabled: function(){
    return this.get('currentPage') == 1;
  }.property('currentPage'),

  isNextDisabled: function(){
    return this.get('currentPage') == this.get('totalPages');
  }.property('currentPage', 'totalPages'),

  actions: {
    prevPage: function() {
      var currentPage = this.get('currentPage'),
        prevPage = currentPage - 1;
      if (currentPage == 1) return;
      this.set('page', prevPage);
    },
    nextPage: function() {
      var currentPage = this.get('currentPage'),
        nextPage = currentPage + 1;
      if (currentPage == this.get('totalPages')) return;
      this.set('page', nextPage);
    },
    goToPage: function(page){
      this.set('page', page);
    }
  }
})
