//este script tambien trae otro modulo que es MediaPlayer
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

// aplicando el IntersectionObserver
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const button = document.querySelector("button");
const muteButton = document.querySelector('[id="muteButton"]');

// instanciamos y le pasamos el objeto de configuracion
const player = new MediaPlayer({
    el: video,
    plugins:[
        new AutoPlay(),
        new AutoPause()
    ]
});

button.onclick = () => player.togglePlay();
// Operador condicional (ternario)
// condición ? expr1 : expr2
muteButton.onclick = () => player.muted() ? player.unmute(): player.mute();