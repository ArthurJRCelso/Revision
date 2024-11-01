const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let input = document.querySelector("#inputNumber")
let random = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTry)
btnReset.addEventListener('click', handleReset)
document.addEventListener('keydown', handleEnter)

function handleTry(event) {
    event.preventDefault()

    if (input.value == '' || input.value < 1 || input.value > 10) {
        alert('Valor inválido! Tente novamente!')
        return
    }

    if (input.value == random) {
        screen2.classList.remove('hide')
        screen1.classList.add('hide')
        screen2.querySelector('h2').innerHTML = `Você acertou em ${xAttempts}`
    }

    input.value = ''
    xAttempts++
}

function handleEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleReset()
    }
}

function handleReset() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    random = Math.round(Math.random() * 10)
    input.value = ''
    xAttempts = 1
}