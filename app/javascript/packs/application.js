import TurbolinksAdapter from 'vue-turbolinks';
import Vue from 'vue/dist/vue.esm'
// import VueResource from 'vue-resource'

// import "./../src/application.css"

// Vue.use(VueResource);
Vue.use(TurbolinksAdapter);

// import components
// import SampleVueComponent from '../components/sample.vue'
// Vue.component('sample-vue-component', SampleVueComponent);

console.log("Loading...");

document.addEventListener('turbolinks:load', () => {
  console.log("Turbolinks Loaded");
  // Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]')
  //   .getAttribute('content');

  // let token = document.getElementsByName('csrf-token')[0].getAttribute('content');
  // axios.defaults.headers.common['X-CSRF-Token'] = token;
  // axios.defaults.headers.common['Accept'] = 'application/json';
  //
  // const app = new Vue({
  //   el: '[data-behavior="vue"]',
  // });
});
