// classe que vai conter a lógica dos dados
// como os dados serão estruturados
class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
            login: 'ArthurJRCelso',
            name: 'Arthur Rodrigues',
            public_repos: '31',
            followers: '78965'
           },
           {
            login: 'maykbrito',
            name: 'Mayk Brito',
            public_repos: '76',
            followers: '120000'
           }
        ]
    }
}

// classe que vai criar a visualização e eventos do html
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
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