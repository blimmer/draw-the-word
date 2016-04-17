import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drawing-board', 'Integration | Component | drawing board', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{drawing-board}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#drawing-board}}
      template block text
    {{/drawing-board}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
