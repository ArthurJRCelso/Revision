import state from "./state.js";

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
}

export function set() {

}

export function reset() {
    state.isRunning = false
    state.isRunning = document.documentElement.classList.remove('running')
}

export function addTime() {

}

export function removeTime() {

}