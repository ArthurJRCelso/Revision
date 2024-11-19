import { Router } from "./spa.js";

const routes = new Router()

routes.add("/", "/pages/home.html")
routes.add("/universe", "/pages/universe.html")
routes.add("/explorer", "/pages/explore.html")

routes.handle()

window.route = () => routes.route()