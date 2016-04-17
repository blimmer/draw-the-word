import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginWithFacebook() {
      this.get('torii').open('facebook-connect').then(() => {
        this.transitionTo('/');
      });
    }
  }
});
