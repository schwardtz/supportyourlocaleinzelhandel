
import VueRouter from 'vue-router'

const Contact =()=> import("./../components/Contact.vue")
const Locations =()=> import("./../components/Locations.vue")
const Map =()=> import("./../components/Map.vue")
const Input =()=> import("./../components/Input.vue")
const routes = [
  { path: '/', name:'home', component: Locations },
  { path: '/contact', name:'contact', component: Contact },
  { path: '/karte', name:'map', component: Map },
  { path: '/input', name:'input', component: Input },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;
