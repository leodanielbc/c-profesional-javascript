//este script tambien trae otro modulo que es MediaPlayer
import MediaPlayer from '@leodanielbc/platzimediaplayer';
import AutoPlay from '@leodanielbc/platzimediaplayer/lib/plugins/AutoPlay';

// aplicando el IntersectionObserver
import AutoPause from '@leodanielbc/platzimediaplayer/lib/plugins/AutoPause';

import Ads from '@leodanielbc/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector("video");
const playButton: HTMLElement = document.querySelector("#playButton");
const muteButton: HTMLElement = document.querySelector('#muteButton');

// instanciamos y le pasamos el objeto de configuracion
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});

playButton.onclick = () => player.togglePlay();
// Operador condicional (ternario)
// condición ? expr1 : expr2
muteButton.onclick = () => player.muted() ? player.unmute() : player.mute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}