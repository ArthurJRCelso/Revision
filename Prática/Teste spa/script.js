const buttonsLinks = document.querySelectorAll('a')

buttonsLinks.forEach(button => {
    button.addEventListener('click', route)
    
})

const Routes = {
    'home': {
        content: '<h1>Bem vindo a nossa página</h1><p>Estamos aqui para ajudar</p>',
        className: 'home'
    },

    'help': {
        content: '<h1>Precisa de ajuda? Acesse o link</h1><a>Clique aqui</a>',
        className: 'help'
    },

    'contact': {
        content: '<h1>Entre em contato conosco!</h1><button>Acesse o chat</button>',
        className: 'contact'
    },

    'about': {
        content: '<h1>Somos uma empresa séria!</h1><p>Explore o site e conheça mais.</p>',
        className: 'about'
    }
}

function route(event) {
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    const { hash } = window.location
    const localHash = hash.substring(1)
    toggleLink(localHash)
}

function toggleLink(data) {
    const body = document.querySelector('#body')
    const app = document.querySelector('#app')
    const dataRoute = Routes[data] || Routes[404]

    app.innerHTML = dataRoute.content
    body.className = dataRoute.className
}

handle()