//este script tambien trae otro modulo que es MediaPlayer
import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({ el: video }); // instanciamos y le pasamos el objeto de configuracion

button.onclick = () => player.togglePlay();