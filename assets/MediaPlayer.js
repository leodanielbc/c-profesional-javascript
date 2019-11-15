function MediaPlayer(config) { //clase
    this.media = config.el
}

// añadimos metodos a la clase o prototipo, en este caso se llama play
MediaPlayer.prototype.play = function() {
    this.media.play(); // leemos media, con this guardamos la instancia de MediaPlayer o cualquier otro objeto
}
MediaPlayer.prototype.pause = function() {
    this.media.pause();
}
MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

// Para que sea utilizado en otras partes lo exportamos
export default MediaPlayer;