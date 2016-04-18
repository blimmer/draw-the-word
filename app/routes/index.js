import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      window.FB.api('/me', { fields: ['first_name', 'last_name']}, function(res) {
        if (!res || res.error) {
          reject(res.error);
        } else {
          resolve({nick: `${res.first_name} ${res.last_name.charAt(0)}`});
        }
      });
    });
  }
});
