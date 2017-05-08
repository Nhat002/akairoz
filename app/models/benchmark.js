import DS from 'ember-data';

export default DS.Model.extend({
  algoName: DS.attr(),
  workerClusterName: DS.attr(),
  numberWorker: DS.attr('number'),
  numberPS: DS.attr('number'),
  time: DS.attr('number'),
  price: DS.attr('number'),
  psClusterName: DS.attr('number'),
});
