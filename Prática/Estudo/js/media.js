export function handleMedia() {
    let name = document.querySelector('#name')
    let noteOne = document.querySelector('#firstNote')
    let noteTwo = document.querySelector('#secondNote')
    let noteThree = document.querySelector('#thirdNote')
    const form = document.querySelector('.formMedia')
    const modal = document.querySelector('.modalMedia')
    const textModal = document.querySelector('.textModal')
    const buttonCloseModal = document.querySelector('.close')

    document.addEventListener('keydown', handleEsc)
    buttonCloseModal.addEventListener('click', handleModal)
    
    form.onsubmit = (event) => {
        event.preventDefault()
        
        const firstNote = parseFloat(noteOne.value)
        const secondNote = parseFloat(noteTwo.value)
        const thirdNote = parseFloat(noteThree.value)
        const dataName = name.value

        console.log(firstNote)

        const media = calcMedia(firstNote, secondNote, thirdNote)
        const message = `Olá ${dataName}, sua média é de ${media}`
        textModal.textContent = message

        handleModal()
        
    }

    function handleEsc(e) {
        if (e.key == 'Escape' && modal.classList.contains('open')) {
            handleModal()
        }
    }

    function handleModal() {
        modal.classList.toggle('open')
    }

    function calcMedia(noteOne, noteTwo, noteThree) {
        return ((noteOne + noteTwo + noteThree) / 3).toFixed(2)
    }
}



