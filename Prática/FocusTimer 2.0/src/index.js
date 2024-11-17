import * as actions from "./events.js";
import state from "./state.js";
import * as timer from './timer.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    actions.registerControls()

    actions.setMinutes()

    timer.updateDisplay()
}