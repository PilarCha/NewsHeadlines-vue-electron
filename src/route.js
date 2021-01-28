import Vue from 'vue';
import VueRouter from 'vue-router'
import homePage from './components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: homePage
  },
]

export default routes
