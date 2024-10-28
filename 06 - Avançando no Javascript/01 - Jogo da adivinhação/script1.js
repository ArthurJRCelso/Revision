const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleReset)
document.addEventListener('keydown', handleKey)

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if (inputNumber.value == '' || inputNumber.value > 10 || inputNumber.value < 1) {
        alert("Valor inválido! Tente novamente!")
        return
    }

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerHTML = `Acertou em ${xAttempts} tentativas.`
    }

    inputNumber.value = ''
    xAttempts++
}

function handleReset() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleKey(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleReset()
    }
}



