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

    if(input.value < 1 || input.value > 10 || input.value == "") {
        alert('Digite um valor válido!')
        return
    }

    if(input.value == random) {
        handleReset()
        let messageS = `Você acertou em ${xAttempts} tentativas.`
        let message = `Você acertou em ${xAttempts} tentativa.`

        if(xAttempts == 1) {
            screen2.querySelector('h2').textContent = message
        } else {
            screen2.querySelector('h2').textContent = messageS
        }
    }

    xAttempts++
}

function handleEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleReset()
    }
}

function handleReset() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')

    random = Math.round(Math.random() * 10)

    input.value = ""
}