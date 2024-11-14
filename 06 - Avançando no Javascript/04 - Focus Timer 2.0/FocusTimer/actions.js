import state from "./state.js";
import { countdown, updateDisplay } from "./timer.js";
import * as el from "./elements.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    countdown()
}

export function set() {

}

export function reset() {
    state.isRunning = false
    state.isRunning = document.documentElement.classList.remove('running')

    updateDisplay()
}

export function addTime() {
    let minutes = Number(el.minutes.textContent)

    minutes = minutes + 5
       
    updateDisplay(minutes, 0)
}

export function removeTime() {
    let minutes = Number(el.minutes.textContent)

    minutes = minutes - 5

    updateDisplay(minutes, 0)
}