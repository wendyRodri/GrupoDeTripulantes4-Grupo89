import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Category from "../views/Category.vue"
import Contact from "../views/Contact.vue"
import Info from "../views/Info.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/productos",
    name:"Category",
    component: Category,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path:"/info",
    name:"Info",
    component: Info
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
