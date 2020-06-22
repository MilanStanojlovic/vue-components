import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ServerList from './components/ServerList.vue'

Vue.component('app-servers', Home);
Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-servers', ServerList)

new Vue({
  el: '#app',
  render: h => h(App)
})
