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

let patientsName = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []

for (let patient of patients) {
    patientsName.push(patient.name)
    patientsAge.push(patient.age)
    patientsWeight.push(patient.weight)
    patientsHeight.push(patient.height)
}

for (let index = 0; index < patientsAge.length; index++) {
    alert(`${patientsName[index]}, tem ${patientsAge[index]} anos, pesa ${patientsWeight[index]} quilos e tem ${patientsHeight[index]} de altura`)
}