export class Router {
    
    listClass = {
        '/': {
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
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        
        this.handle()
    }
    
    handle() {
        const { pathname } = window.location
        console.log(pathname)
        const page = this.Routes[pathname] || this.Routes[404]

        fetch(page)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
                this.toggleImage(pathname)
            })

        
        }

        toggleImage(image) {
            const body = document.querySelector('#body')
            const routeImg = this.listClass[image]
            if(routeImg) {
                body.className = routeImg.routeImage
            } else {
                console.warn('No routeImage found')
            }
        }
    }

    const router = new Router()
    export default router