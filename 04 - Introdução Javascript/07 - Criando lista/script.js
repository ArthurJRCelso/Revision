let option

let items = []

switch (option) {

}

while (option != 3) {

    option = Number(prompt(`
        Olá usuário! Digite o número da opção desejada:
    
        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa
    `))
    
        switch (option) {
            case 1:
                let item = prompt("Cadastre um item:")
                items.push(item)
            break
            case 2:
                if (items.length == 0) {
                    alert("Não existem itens cadastrados!")
                } else {
                    alert(items)
                }
            break
            case 3: 
                alert("Tchau")
            break
            default:
                alert("Erro! Tente novamente.")

        }
    }   

   /*  if (option == 1) {

        let item = prompt("Cadastre um item:")
        items.push(item)

    } else if (option == 2) {
        
        if (items.length == 0) {
            alert("Não existem itens cadastrados!")
        } else {
            alert(items)
        }
    } else {
        alert("Tchau")
    }
}
    */


