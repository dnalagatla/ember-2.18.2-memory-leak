import Component from '@ember/component';

export default Component.extend({
  actions: {
    clicked() {
      this.set('clicked', true);
    },
  },
});