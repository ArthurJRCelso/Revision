

const routes = {
    '/home': {
        'content': '<h1>Bem vindo ao home!</h1><p>Esta é a página incial</p>',
        className: 'home'
    },

    '/about': {
        'content': '<h1>Sobre nós</h1><p>Informações sobre nós</p>',
        className: 'about'
    },

    '/contact': {
        'content': '<h1>Contato</h1><p>Entre em contato conosco</p>',
        className: 'contact'
    },

    '/help': {
        'content': '<h1>Precisa de ajuda?</h1><button>Acesse o chat</button>',
        className: 'help'
    },

}

const home = document.querySelector('.home')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const help = document.querySelector('.help')

home.addEventListener('click', route)
about.addEventListener('click', route)
contact.addEventListener('click', route)
help.addEventListener('click', route)



const bodyElement = document.getElementById('body')
const contentElement = document.querySelector('#app')

function navigateTo(route) {
   const routesData = routes[route]
   contentElement.innerHTML = routesData.content
   bodyElement.className = routesData.className
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    handle()
    
}

function handle() {
    let { pathname } = window.location
    navigateTo(pathname)
}

window.onpopstate = () => handle()


