const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const messageIMC = document.querySelector('.modal-wrapper .title span')
const modal = document.querySelector('.modal-wrapper')
const btnClose = document.querySelector('.modal-wrapper button.close')
const modalError = document.querySelector('.alert-error')

document.addEventListener('keydown', handleEsc)
btnClose.onclick = () => modal.classList.remove('open')
inputHeight.oninput = () => modalError.classList.remove('open')
inputWeight.oninput = () => modalError.classList.remove('open')


form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const valueNotANumber = notNumber(weight) || notNumber(height)

    if (valueNotANumber) {
        modalError.classList.add('open')
        return
    }

    const IMC = calculateIMC(weight, height)
    const message = `Seu IMC é de ${IMC}`
    messageIMC.innerHTML = message
    modal.classList.add('open')
}   

function notNumber(value) {
    return isNaN(value) || value == ''
}

function handleEsc(e) {
    if (e.key == "Escape") {
        modal.classList.remove('open')
    }
}

function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}