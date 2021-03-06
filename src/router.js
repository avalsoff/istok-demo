import Vue from 'vue';
import Router from 'vue-router';
import Disclaimer from './views/Disclaimer.vue';
import Card from './views/Card.vue';
import Todo from './views/Todo.vue';
import Login from './views/Login.vue';
import Menu from './views/Menu.vue';
import Settings from './views/Settings.vue';
import About from './views/About.vue';
import OrderDeck from './views/OrderDeck.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/about',
      name: 'About',
      component: About    
    },
    {
      path: '/orderdeck',
      name: 'OrderDeck',
      component: OrderDeck
    }
  ]
})
