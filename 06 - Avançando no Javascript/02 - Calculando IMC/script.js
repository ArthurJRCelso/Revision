const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const messageIMC = document.querySelector('.modal-wrapper .title span')
const modal = document.querySelector('.modal-wrapper')
const btnClose = document.querySelector('.modal-wrapper button.close')
const modalError = document.querySelector('.alert-error')

document.addEventListener('keydown', handleKey)
inputWeight.oninput = () => modalError.classList.remove('open')
inputHeight.oninput = () => modalError.classList.remove('open')

form.onsubmit = (event) => {
    event.preventDefault()

    let weight = inputWeight.value
    let height = inputHeight.value

    const notANumber = notNumber(height) || notNumber(weight)

    if (notANumber) {
        modalError.classList.add('open')
        return
    }

    let IMC = calculateIMC(weight, height)
    let message = `Seu IMC é de ${IMC}`
    messageIMC.innerHTML = message
    modal.classList.add('open')
}

function handleKey(event) {
    if (event.key == 'Escape') {
        modal.classList.remove('open')
    }
}

function notNumber(value) {
    return isNaN(value) || value == ''
}

btnClose.onclick = () => modal.classList.remove('open')

function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}