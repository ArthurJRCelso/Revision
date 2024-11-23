let inputWeight
let inputHeight
let modal

export function handleCalcImc() {
    inputWeight = document.querySelector('#weight')
    inputHeight = document.querySelector('#height')

    const form = document.querySelector('.calcImc')
    form.addEventListener('click', (event) => {
        event.preventDefault()

        const weight = inputWeight.value
        const height = inputHeight.value

        const inputNotANumber = notANumber(weight) || notANumber(height)
        console.log(inputNotANumber)

        if(inputNotANumber) {
            alert('Digite um valor válido!')
            return
        }

        const IMC = calcIMC(weight, height)
        
        const message = `Seu IMC é de ${IMC}`

        printMessage(message)
        toggle()
    })

}

function calcIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printMessage(message) {
    modal = document.querySelector('.modal')
    const print = message
    const text = document.createElement('p')

    text.textContent = print

    modal.appendChild(text)
}

function notANumber(value) {
    return isNaN(value) || value == ''
}

function toggle() {
    modal = document.querySelector('.modal')
    modal.classList.toggle('hide')
}
