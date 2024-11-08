let darkMode = true
const buttonMode = document.querySelector('#toggle-mode')
const controls = document.querySelector('#controls')

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

controls.addEventListener('click', (event) => {
    let action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
        return
    }

    actions[action]()
})


buttonMode.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    let mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})