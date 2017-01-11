import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  recordId: DS.attr(),
  description: DS.attr(),
  status: DS.attr(),
  payment_status: DS.attr(),
});