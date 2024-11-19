export class Router {

    listClass = {
        '/home': {
            routeImage: 'home'
        },

        '/universe': {
            routeImage: 'universe'
        },

        '/explorer': {
            routeImage: 'explore'
        }
    }

    Routes = {}

    add(routePage, page) {
        this.Routes[routePage] = page
    }

    route(event) {
        event = event || event.window
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        
        this.handle()
    }
    
    handle() {
        const { pathname } = window.location
        const page = this.Routes[pathname] || this.Routes[404]
        console.log(pathname)
        fetch(page)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
        this.toggleImage(pathname)
    }

    toggleImage(page) {
        const body = document.querySelector('.body')
        const classNames = this.listClass[page]
        if(classNames) {
            body.className = classNames.routeImage
        }
    }
}