import MediaPlayer from '../MediaPlayer';

class AutoPlay {
    constructor() {
    }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true; //llamamos al metodo set y le enviamos el valor con el signo =
        }
        player.play();
    }
}
export default AutoPlay;