const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const messageIMC = document.querySelector('.modal-wrapper .title span')
const modal = document.querySelector('.modal-wrapper')
const btnClose = document.querySelector('.modal-wrapper button.close')
const modalError = document.querySelector('.alert-error')

btnClose.addEventListener('click', handleClose)
document.addEventListener('keydown', handleEsc)
inputWeight.oninput = () => modalError.classList.remove('open')
inputHeight.oninput = () => modalError.classList.remove('open')

form.onsubmit = event => {
    event.preventDefault()

    let weight = inputWeight.value
    let height = inputHeight.value

    let notANumberWeightHeight = notANumber(weight) || notANumber(height)

    if (notANumberWeightHeight) {
        modalError.classList.add('open')
        return
    }

    let IMC = calculateIMC(weight, height)

    let message = `Seu IMC é de ${IMC}`
    messageIMC.innerHTML = message
    modal.classList.toggle('open')
}

function notANumber(value) {
    return isNaN(value) || value == ''
}

function handleClose() {
    modal.classList.remove('open')
    inputHeight.value = ''
    inputWeight.value = ''
}

function handleEsc(e) {
    if (e.key == 'Escape') {
        handleClose()
    }
}

function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}