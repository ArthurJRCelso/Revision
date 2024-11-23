let name
let noteOne
let noteTwo
let noteThree

export function handleMedia() {
    const button = document.querySelector('.buttonMedia')
    button.addEventListener('click', (event) => {
        event.preventDefault()

        name = document.querySelector('#name').value
        noteOne = parseFloat(document.querySelector('#firstNote').value)
        noteTwo = parseFloat(document.querySelector('#secondNote').value)
        noteThree = parseFloat(document.querySelector('#thirdNote').value)

        const note = calcMedia(noteOne, noteTwo, noteThree)
        
        const message = `Olá ${name}, sua média foi de ${note}`
        console.log(message)
    })
}

function calcMedia(noteOne, noteTwo, noteThree) {
    return ((noteOne + noteTwo + noteThree) / 3).toFixed(2)
}