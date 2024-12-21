class GithubFavorites {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
            .then(data => data.json())
            .then(({ name, login, public_repos, followers }) => ({
                name,
                login,
                public_repos,
                followers
            }))
    }
}

class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@githubfavorites:')) || []
    }

    save() {
        localStorage.setItem('@githubfavorites:', JSON.stringify(this.entries))
    }

    delete(user) {
        const userFiltered = this.entries.filter(entry => 
            user.login != entry.login
        )

        this.entries = userFiltered
        this.update()
        this.save()
    }

    async add(username) {
        try {
            const userExists = this.entries.find(user => 
                user.login == username)

            if(userExists) {
                throw new Error('Usuário já cadastrado!')
            }

            const user = await GithubFavorites.search(username)

            if(user.login == undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch(erro) {
            alert(erro.message)
        }
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onadd()
    }
    
    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
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

    onadd() {
        const addButton = this.root.querySelector('.buttonFav')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('#input-search')

            this.add(value)
        }
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = 
        `
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
            .forEach(tr => {
                tr.remove()
        })
   }
}