
export class singlePage {

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
        const page = this.Routes[pathname] || this.Routes[404]

        fetch(page)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
        
    }
}