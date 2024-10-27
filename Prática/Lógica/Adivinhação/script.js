let number = prompt("Qual número estou pensando?")
let random = Math.round(Math.random() * 10)
let xAttempts = 1

while (number != random) {
    number = prompt("Tente novamente")
    xAttempts++
}

if (number == random) {
    alert(`Parabéns, você acertou em ${xAttempts} tentativas`)
}