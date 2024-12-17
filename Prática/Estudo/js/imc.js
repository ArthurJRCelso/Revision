export function calcIMC() {

    const form = document.querySelector('.calcImc')
    const modal = document.querySelector('.modal')

    form.onclick = event => {
        event.preventDefault()

        const weight = document.querySelector('#weight').value
        const height = document.querySelector('#height').value

        
        const weightOrHeightNotANumber = notANumber(weight) || notANumber(height)
        
        if(weightOrHeightNotANumber) {
            alert('Digite um valor válido!')
            return
        }
        
        const IMC = calculateIMC(weight, height)
        
        const message = `Seu IMC é de ${IMC}`
        console.log(message)

        const textModal = document.querySelector('.textModal')
        textModal.textContent = message
        
        toggle()
        buttonReset.classList.remove('hide')
        
    }

    const buttonReset = document.querySelector('#reset')
    buttonReset.onclick = event => {
        event.preventDefault()

        toggle()
        buttonReset.classList.add('hide')

    }

    function toggle() {
        form.classList.toggle('hide')
        modal.classList.toggle('hide')
    }

    function notANumber(value) {
        return isNaN(value) || value == ''
    }

    function calculateIMC(weight, height) {
        return (weight / ((height / 100) ** 2)).toFixed(2)
    }
}