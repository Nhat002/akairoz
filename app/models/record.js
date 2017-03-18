import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  type: DS.attr(),
  status: DS.attr(),
  createdAt: DS.attr('number'),
  endedAt: DS.attr('number'),
  description: DS.attr(),
  datasetLink: DS.attr(),
  runParams:DS.attr('raw'),
  result: DS.attr(),
  userId: DS.attr(),
});