const alunos = [
    {
        name: "Arthur",
        nota1: 8,
        nota2: 6,
        nota3: 4,
    },
    {
        name: "Igor",
        nota1: 9,
        nota2: 8,
        nota3: 10,
    },
    {
        name: "Heitor",
        nota1: 5,
        nota2: 9,
        nota3: 8,
    },
]

function media(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2)
}

function printMedia(aluno) {
    return `O ${aluno.name} obteve a média de ${media(aluno.nota1, aluno.nota2, aluno.nota3)}`
}

for(let aluno of alunos) {
    let messageMedia = printMedia(aluno)
    alert(messageMedia)
}