import { addItems } from "./items.js"

export class Route {

    Router = {}

    add(routeName, link) {
        this.Router[routeName] = link
    }

    route(event) {
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const page = this.Router[pathname] || this.Router[404]

        fetch(page)
            .then(link => link.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
                    if(pathname == '/buy') {
                        addItems()
                    }
            })
    }
}