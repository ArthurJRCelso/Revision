import state from "./state.js"

const sounds = {
    rain: new Audio('./assets/Chuva.wav'),
    
    tree: new Audio('./assets/Floresta.wav'),
    
    fire: new Audio('./assets/Lareira.wav'),
    
    store: new Audio('./assets/Cafeteria.wav')
}


const buttonSoundTree = document.getElementById('tree')

const music = document.getElementById("environment")

music.addEventListener('click', (event) => {
    let sound = event.target.dataset.music
    if(typeof sounds[sound] != 'object') {
        return
    }

    sounds[sound].play()    
})