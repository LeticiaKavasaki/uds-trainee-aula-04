import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import LeticiaKavasaki from '@/components/LeticiaKavasaki';
import Home from '@/components/Home';
import Contador from '@/components/Contador';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/sobre',
      name: 'Leticia Kavasaki',
      component: LeticiaKavasaki,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contador',
      name: 'Contador',
      component: Contador,
    },
  ],
});
