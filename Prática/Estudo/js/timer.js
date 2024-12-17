
let inputMinutes = document.querySelector('.minutes')
let inputSeconds = document.querySelector('.seconds')

export function cowntdown() {
    let minutes = Number(inputMinutes.textContent)
    let seconds = Number(inputSeconds.textContent)

    seconds++

    if (seconds > 59) {
        seconds = 0
        minutes++
    }

    updateDisplay(minutes, seconds)
    setTimeout(() => cowntdown(), 1000)
}

function updateDisplay(minutes, seconds) {
    inputMinutes.textContent = String(minutes).padStart(2, '0')
    inputSeconds.textContent = String(seconds).padStart(2, '0')
}