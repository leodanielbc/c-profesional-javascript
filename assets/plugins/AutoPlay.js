function AutoPlay() {
}
AutoPlay.prototype.run = function (player) { //parametro: recibe una instancia de MediaPlayer
    if (!player.muted) {
        player.muted = true; //llamamos al metodo set y le enviamos el valor con el signo =
    }
    player.play();
};
export default AutoPlay;