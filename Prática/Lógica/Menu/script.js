let option
let cars = []

while(option != 3) {
    option = prompt(`
        Olá! Digite um das opções abaixo:
        
        1. Adicionar carro
        2. Ver lista de carros adicionados
        3. Sair do programa
        `)

    if(option == 1) {
        let car = prompt('Digite um carro:')
        cars.push(car)

    } else if(option == 2) {
        if(cars.length == 0) {
            alert('Nenhum carro adicionado!')
        } else {
            alert(cars)
        }
    } else {
        alert('Obrigado!')
    }
}