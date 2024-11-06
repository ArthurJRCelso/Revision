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

    if (input.value < 0 || input.value > 10 || input.value == '') {
        alert('Valor inválido!')
        return
    }

    if (input.value == random) {
        screen1.classList.toggle('hide')
        screen2.classList.toggle('hide')

        let message = screen2.querySelector('h2')
        message.innerHTML = `Você acertou em ${xAttempts} tentativas`
    }

    xAttempts++
}

function handleReset() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    xAttempts = 1
    random = Math.round(Math.random() * 10)
    input.value = ''
}

function handleEnter(e) {
    if (screen1.classList.contains('hide') && e.key == 'Enter') {
        handleReset()
    }
}






