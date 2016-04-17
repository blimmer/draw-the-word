import Ember from 'ember';

const {
  computed,
  String: { dasherize },
} = Ember;

export default Ember.Controller.extend({
  currentRouteClass: computed('currentRouteName', function() {
    return dasherize(this.get('currentRouteName'));
  }),
});
