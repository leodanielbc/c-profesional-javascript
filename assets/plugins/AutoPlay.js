function AutoPlay() {
}
AutoPlay.prototype.run = function (player) { //parametro: recibe una instancia de MediaPlayer
    player.mute();
    player.play();
}
export default AutoPlay;