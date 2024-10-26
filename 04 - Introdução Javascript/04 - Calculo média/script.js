let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Digite a primeira nota:")
let n2 = prompt("Digite a segunda nota:")
let n3 = prompt("Digite a terceira nota:")

let average = ((Number(n1) + Number(n2) + Number(n3)) / 3).toFixed(2)

let result = average > 6

if(result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if(average < 3) {
    alert("Reprovado")
} else {
    alert(student + "! Estude para sua prova de recuperação! Sua média foi de: " + average)
}