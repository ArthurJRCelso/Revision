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
        height: 54,
    },
]

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printIMC(patient) {
    return `
    O paciente ${patient.name} possui um IMC de ${IMC(patient.weight, patient.height)}`
}

for (let patient of patients) {
    let printMessage = printIMC(patient)
    alert(printMessage)
}