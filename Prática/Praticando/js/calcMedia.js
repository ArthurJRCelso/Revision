
export function handleMedia() {

    const modal = document.querySelector('.modalMedia')
    const buttonClose = document.querySelector('button.close')
    const button = document.querySelector('.buttonMedia')
    const messageModal = document.querySelector('.textModal')
    const input = document.querySelectorAll('input-wrapper input').value
    let noteOne
    let noteTwo
    let noteThree

    buttonClose.addEventListener('click', closeModal)
    document.addEventListener('keydown', closeModalEsc)

    button.addEventListener('click', (event) => {
        event.preventDefault()
        
        const name = document.querySelector('#name').value
        noteOne = parseFloat(document.querySelector('#firstNote').value)
        noteTwo = parseFloat(document.querySelector('#secondNote').value)
        noteThree = parseFloat(document.querySelector('#thirdNote').value)
        
        const note = calcMedia(noteOne, noteTwo, noteThree)
        
        const message = `Olá ${name}, sua média foi de ${note}`
        
        messageModal.textContent = message
        
       
       closeModal()
    })

    function closeModalEsc(e) {
        if(e.key == 'Escape' && modal.classList.contains('open')) {
            closeModal()
        }
    }

    function closeModal() {
        modal.classList.toggle('open')
    }  
    
    function calcMedia(noteOne, noteTwo, noteThree) {
        return ((noteOne + noteTwo + noteThree) / 3).toFixed(2)
    }
}



