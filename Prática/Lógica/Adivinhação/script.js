let number = prompt("Qual número estou pensando?")
let xAttempts = 1

while (number != random) {
    number = prompt("Tente novamente")
    xAttempts++
}

if (number == random) {
    alert(`Parabéns, você acertou em ${xAttempts} tentativas`)
}