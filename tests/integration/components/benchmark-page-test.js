import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('benchmark-page', 'Integration | Component | benchmark page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{benchmark-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#benchmark-page}}
      template block text
    {{/benchmark-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
