alert("Hello World!")

let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))

let sum = numberOne + numberTwo

alert(`O valor da soma é ${sum}`)

let value = prompt("Digite algum caractere:")

let type = typeof value

while (value == "") {
    alert('Erro! Tente novamente!')
    value = prompt("Digite algum caractere:")
}  if (type == "number") {
    alert("É um número!")
} else if (type == "string") {
    alert("É uma string!")
}

let numberTest = true

let booleano = typeof numberTest

if (booleano == "boolean") {
    alert("É booleano!")
} else {
    alert("Não é booleano!")
}

if (sum % 2 == 0) {
    alert("Este número é par!")
} else {
    alert("Esse número é ímpar!")
}

