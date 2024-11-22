
import { singlePage } from "./main.js";

const site = new singlePage()

site.add('/', '/pages/home.html')
site.add('/buy', '/pages/buy.html')
site.add('/imc', '/pages/imc.html')
site.add('/contact', '/pages/contact.html')

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (event) => {
      site.route(event); 
  });
});

// window.route = () => site.route()
site.handle()