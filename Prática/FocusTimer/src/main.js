let darkMode = true
const buttonMode = document.querySelector('#toggle-mode')
const controls = document.querySelector('#controls')

const sounds = {
    buttonPressAudio: new Audio('./assets/button-press.wav'),
    kitchenTimer: new Audio('./assets/kichen-timer.mp3'),
    bgAudio: new Audio('./assets/bg-audio.mp3')
}

const el = {
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
}

let state = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    isMute: true,
    countdownID: null
}

function countdown() {

    clearTimeout(state.countdownID)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        actions.reset()
        sounds.kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownID = setTimeout(() => countdown(), 1000)
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

    setMinutes()
}

const actions = {
    toggleRunning() {
        state.isRunning = document.documentElement.classList.toggle('running')

        countdown()
        sounds.buttonPressAudio.play()
    },
    
    reset() {
        state.isRunning = false
        state.isRunning = document.documentElement.classList.remove('running')
        updateDisplay()

        sounds.buttonPressAudio.play()
    },
    
    set() {
        el.minutes.setAttribute('contenteditable', true)
        el.minutes.focus()
    },
    
    toggleMusic() {
        state.isMute = document.documentElement.classList.toggle('music-on')

        if(state.isMute) {
            sounds.bgAudio.play()
            return
        }

        sounds.bgAudio.pause()
        bgAudio.loop = true
    }
}

function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ''
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
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

