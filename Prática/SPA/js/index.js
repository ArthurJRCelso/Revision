import { Router } from './routes.js'

const route = new Router()

route.add("/", "/pages/home.html")
route.add("/about", "/pages/about.html")
route.add("/contact", "/pages/contact.html")
route.add(404, "/pages/404.html")

window.onpopstate = () => route.handle()
window.route = () => route.route()


console.log(route.routes)