export function addItems() {
    const buttonAdd = document.querySelector('.addItem')
    buttonAdd.addEventListener('click', event => {
        event.preventDefault()

        const { value } = document.querySelector('#items')
        const listItems = document.querySelector('.my-list')
        const li = document.createElement('li')

        li.textContent = value

        listItems.append(li)
    })
}