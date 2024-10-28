const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let input = document.querySelector("#inputNumber")
let random = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTry)
btnReset.addEventListener('click', handleReset) 
document.addEventListener('keydown', handleKey)

function handleTry(event) {
    event.preventDefault(event)
    
    if (input.value == "" || input.value < 1 || input.value > 10) {
        alert("Valor inválido!")
        return
    }
    
    if(Number(input.value) == random) {
        handleToggle()
        screen2.querySelector("h2").innerHTML = `Você acertou em ${xAttempts}`
    }
    
    input.value = ""
    xAttempts++
}

function handleReset() {
        handleToggle()
        random = Math.round(Math.random() * 10)
        xAttempts = 1
}

function handleKey(e) {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
        handleToggle()
        random = Math.round(Math.random() * 10)
        xAttempts = 1
    }
}

function handleToggle() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}