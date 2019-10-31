import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const User = () => import('./views/User');
const ProductDetail = () => import('./views/ProductDetail');
const Login = () => import('./components/Login');
const Register = () => import('./components/Register');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      redirect: '/user/login'
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
    },
    {
      path: '/product/:id',
      component: ProductDetail
    }
  ]
})
