import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['drawing-board-component'],
  board: null,

  didInsertElement() {
    this._super(...arguments);

    const board = new DrawingBoard.Board('drawing-board');
    this.set('board', board);
  },

  actions: {
    save() {
      const board = this.get('board');
      debugger;
    },
  },
});
