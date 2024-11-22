export function buttonItems() {
    const button = document.querySelector('.addItem')
    button.addEventListener('click', (e) => {
        e.preventDefault()

        const input = document.querySelector('.inputItem')
        const listValue = input.value
        const myList = document.querySelector('.my-list')
        const list = document.createElement('li')

        list.textContent = listValue

        if(listValue == '') {
            alert('Digite um valor válido!')
        } else {
            myList.appendChild(list)
        }
        
        input.value = ''
    })
}

