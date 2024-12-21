export function addItems() {
    const buttonAdd = document.querySelector('.addItem')
    buttonAdd.addEventListener('click', event => {
        event.preventDefault()

        const { value } = document.querySelector('#items')
        const listItems = document.querySelector('.my-list')
        const li = document.createElement('li')

        li.textContent = value

        if (value == '') {
            alert('Digite um item!')
        } else {
            listItems.append(li)
        }

    })
}