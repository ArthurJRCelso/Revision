let darkMode = true
const buttonMode = document.querySelector('#toggle-mode')
const controls = document.querySelector('#controls')

let state = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    isMute: true,
}

start(0, 6)

function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    registerControls()
}

const actions = {
    toggleRunning() {
        console.log('opa')
    },
    
    reset() {
    
    },
    
    set() {
    
    },
    
    toggleMusic() {
        
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