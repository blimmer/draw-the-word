import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);

    if (!this.get('session.isAuthentiated')) {
      this.transitionTo('/login');
    }
  }
});
