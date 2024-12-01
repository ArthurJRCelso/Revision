class GithubUser {
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
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:') || [])
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {

            const userExists = this.entries.find(entry => username == entry.login)

            if(userExists) {
                throw new Error('Usuário já cadastrado!')
            }

            const user = await GithubUser.search(username)

            if(user.name == undefined) {
                throw new Error('Usuário não encontrado!')
            }
    
            this.entries = [user, ...this.entries]
            this.update()
            this.save()
            
        } catch(error) {
            alert(error.message)
        }
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => user.login !== entry.login)

        this.entries = filteredEntries
        this.update()
        this.save()
        this.tableEmpty()
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        console.log(this.tbody)

        this.update()
        this.onadd()
        this.tableEmpty()
    }
    
    update() {
        
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            this.tbody.append(row)

            row.querySelector('.remove').onclick = event => {
                event.preventDefault()

                const isOk = confirm('Tem certeza que deseja excluir este usuário?')

                if(isOk) {
                    this.delete(user)
                }
            }
        })
    }

    onadd() {
        const addButton = this.root.querySelector('form button')
        addButton.onclick = event => {
            event.preventDefault()

            const { value } = this.root.querySelector('form input')
            
            this.add(value)
        }
    }

    tableEmpty() {
       const empty = document.createElement('tr')
       empty.classList.add('none')

       empty.innerHTML = `
                    <td colspan="4">
                        <div class="quote">
                            <img class="starEmpty" src="assets/Estrela.svg" alt="">
                            <p>Nenhum favorito adicionado</p>
                        </div>
                    </td>`

        if(this.entries.length == 0) {
            this.tbody.append(empty)
        }
      
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td class="user">
                        <img src="https://github.com/ArthurJRCelso.png" alt="">
                        <a href="">
                            <p>Arthur Rodrigues</p>
                            <span>/ArthurJRCelso</span>
                        </a>
                    </td>
                    <td class="repositories">
                        123
                    </td>
                    <td class="followers">
                        1234
                    </td>
                    <td>
                        <a class="remove" href="">
                            Remover
                        </a>
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