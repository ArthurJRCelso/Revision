import { Route } from "./spa.js";

const route = new Route()

route.add('/', '/pages/home.html')
route.add('/buy', '/pages/buy.html')
route.add('/imc', '/pages/imc.html')
route.add('/media', '/pages/calcMedia.html')
route.add('/contact', '/pages/contact.html')
route.add(404, '/pages/404.html')

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        route.route(event)
    })
})

route.handle()