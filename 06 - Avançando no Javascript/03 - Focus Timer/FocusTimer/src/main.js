let darkMode = true
const buttonMode = document.querySelector('#toggle-mode')
const controls = document.querySelector('#controls')

const el = {
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
}

let state = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    isMute: true,
}

function countdown() {
    if(!state.isRunning) {
        return
    }

    setTimeout(() => countdown(), 1000)
}

function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}


start(0, 6)

function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    updateDisplay()

    registerControls()
}

const actions = {
    toggleRunning() {
        state.isRunning = document.documentElement.classList.toggle('running')

        countdown()
    },
    
    reset() {
        state.isRunning = false
        state.isRunning = document.documentElement.classList.remove('running')

    },
    
    set() {
    
    },
    
    toggleMusic() {
        state.isMute = document.documentElement.classList.toggle('music-on')
    }
}

function registerControls() {
    controls.addEventListener('click', (event) => {
        let action = event.target.dataset.action
        if (typeof actions[action] != 'function') {
            return
        }
    
        actions[action]()
    })
}


buttonMode.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    let mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})