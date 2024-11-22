
import { singlePage } from "./main.js";

const sitePage = new singlePage()

sitePage.add('/', '/pages/home.html')
sitePage.add('/buy', '/pages/buy.html')
sitePage.add('/imc', '/pages/imc.html')
sitePage.add('/contact', '/pages/contact.html')
sitePage.add(404, "/pages/404.html")





sitePage.handle()



window.route = () => sitePage.route(event)