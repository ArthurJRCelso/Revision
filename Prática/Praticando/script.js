
import { singlePage } from "./main.js";

const site = new singlePage()

site.add('/', '/pages/home.html')
site.add('/buy', '/pages/buy.html')
site.add('/imc', '/pages/imc.html')
site.add('/contact', '/pages/contact.html')






window.route = () => site.route()
site.handle()