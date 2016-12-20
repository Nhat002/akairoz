import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	modelId: DS.attr(),
	description: DS.attr(),
	status: DS.attr(),
	paymentStatus: DS.attr(),
});