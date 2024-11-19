export class Router {

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
        
        if(pathname == '/universe') {
            document.documentElement.classList.remove('home')
            document.documentElement.classList.add('universe')
        } else if(pathname == '/explorer') {
            document.documentElement.classList.remove('universe')
            document.documentElement.classList.add('explore')
        }
    }
}