import * as el from './elements.js'

export function countdown() {

    let min = Number(el.minutes.textContent)
    let sec = Number(el.seconds.textContent)

    sec++
    
    if(sec > 59) {
        sec = 0
        min++
    } 

    updateDisplay(min, sec)

    setTimeout(() => countdown(), 1000)

}

function updateDisplay(minutes, seconds) {
    minutes = minutes 
    seconds = seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}