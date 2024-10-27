let options
let items = []

while (options != 3) {
    options = prompt(`
        Olá usuário! Digite o número da opção desejada:
    
        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa`)

    if (options == 1) {

        let item = prompt("Adicione um item:")
        items.push(item)

    } else if (options == 2) {

        if (items.length == 0) {
            alert("Nenhum item adicionado!")
        } else {
            alert(items)
        }
    } else {
        alert("Tchau")
    }
}