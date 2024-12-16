export function calcIMC() {
    const form = document.querySelector('#formImc')
    form.onsubmit = event => {
        event.preventDefault()
    }
}