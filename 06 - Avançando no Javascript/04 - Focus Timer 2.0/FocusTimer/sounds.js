import state from "./state.js"

const sounds = {
    rain: new Audio('./assets/Chuva.wav'),
    
    tree: new Audio('./assets/Floresta.wav'),
    
    fire: new Audio('./assets/Lareira.wav'),
    
    store: new Audio('./assets/Cafeteria.wav')
}

sounds.rain.loop = true
sounds.tree.loop = true
sounds.fire.loop = true
sounds.store.loop = true

let currentSound = null

const music = document.getElementById("environment")

music.addEventListener('click', (event) => {
    
    let sound = event.target.dataset.music

    if(typeof sounds[sound] != 'object') {
        return
    }

    if(currentSound) {
        currentSound.pause()
        currentSound.currentTime = 0
    }

    currentSound = sounds[sound]
    currentSound.play()   
})