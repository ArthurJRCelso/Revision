import state from "./state.js";
import { countdown } from "./timer.js";
import * as el from './elements.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    countdown()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function reset() {
    state.isRunning = false
    state.isRunning = document.documentElement.classList.remove('running')
}

export function addTime() {

}

export function removeTime() {

}