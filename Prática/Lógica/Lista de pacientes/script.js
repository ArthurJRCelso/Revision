const patients = [
    {
        name: "Arthur",
        age: 28,
        weight: 94,
        height: 186,
    },
    {
        name: "Camila",
        age: 24,
        weight: 57,
        height: 164,  
    },
    {
        name: "Henry",
        age: 2,
        weight: 7,
        height: 1,
    },
]

function printName(patient) {
    return `${patient.name}`
}

function printAge(patient) {
    return `${patient.age}`
}

function printWeight(patient) {
    return `${patient.weight}`
}

function printHeight(patient) {
    return `${patient.height}`
}

function printPacient(patient) {
    return `O paciente ${printName(patient)} tem ${printAge(patient)} anos, com um peso de ${printWeight(patient)}, e uma altura de ${printHeight(patient)}.`
}

for (let patient of patients) {
    let message = printPacient(patient)
    alert(message)
}

