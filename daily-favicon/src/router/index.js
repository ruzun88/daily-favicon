import Vue from 'vue';
import VueRouter from 'vue-router'
import Test1 from '../components/Test1.vue'
import Test2 from '../components/Test2.vue'

Vue.use(VueRouter);

export const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/jna',
      component: Test1,
    },
    {
      path: '/yj',
      component: Test2,
    }
  ]
})