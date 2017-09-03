import Vue from 'vue';
import routes from './routes';

const app = new Vue({
  el: '#film-base',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const pageName = routes[this.currentRoute];
      if (pageName) {
        return require('./pages/' + pageName + '.vue');
      } else {
        return require('./pages/404.vue');
      }
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
