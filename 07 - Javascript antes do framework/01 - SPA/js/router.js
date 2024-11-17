export class Router {

    route = {}

    add(nameRoute, page) {
        this.route[nameRoute] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        
        const page = this.route[pathname] || this.route[404]

        fetch(page)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
    }
}