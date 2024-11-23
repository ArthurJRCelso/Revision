
import { countdown } from './js/timer/index.js'
import sitePage from './main.js'

sitePage.add('/', '/pages/home.html')
sitePage.add('/buy', '/pages/buy.html')
sitePage.add('/imc', '/pages/imc.html')
sitePage.add('/contact', '/pages/contact.html')
sitePage.add(404, "/pages/404.html")

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        sitePage.route(event)
    })
})


countdown()
sitePage.handle()

