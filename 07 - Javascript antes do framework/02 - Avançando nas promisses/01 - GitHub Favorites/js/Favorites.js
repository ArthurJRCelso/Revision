export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then(({ login, name, public_repos, followers }) => ({
            login,
            name,
            public_repos,
            followers
        }))
    }
}
// classe que vai conter a lógica dos dados
// como os dados serão estruturados
class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search('ArthurJRCelso').then(user => console.log(user))
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem
            ('@github-favorites:')) || []
    }

    async add(username) {
        const user = await GithubUser.search(username)
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => 
            user.login !== entry.login)

            this.entries = filteredEntries
            this.update()
    }
}

// classe que vai criar a visualização e eventos do html
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            this.tbody.append(row)

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja remover?')

                if(isOk) {
                    this.delete(user)
                }
            }
     })
       
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
                    <td class="user">
                        <img src="https://github.com/ArthurJRCelso.png" alt="">
                        <a href="https://github.com/ArthurJRCelso" target="_blank">
                            <p>Arthur Rodrigues</p>
                            <span>ArthurJRCelso</span>
                        </a>
                    </td>
                    <td class="repositories">
                        76
                    </td>
                    <td class="followers">
                        9589
                    </td>
                    <td>
                        <button class="remove">&times;</button>
                    </td>
       `

       return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}