import * as events from "./actions.js";
import state from "./state.js";
import * as timer from './timer.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()

    events.registerControls()
}