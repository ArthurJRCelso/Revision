import { Router } from './router.js'

const route = new Router()

route.add("/", "/pages/home.html")
route.add("/about", "/pages/about.html")
route.add("/contact", "/pages/contact.html")
route.add(404, "/pages/404.html")

route.handle()

window.onpopstate = () => route.handle()
window.route = () => route.route()
