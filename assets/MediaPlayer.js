function MediaPlayer(config) { //clase
    this.media = config.el
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this);//con this se refiere a la instancia de MediaPlayer
    });
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
MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}
MediaPlayer.prototype.muted = function() {
    return this.media.muted;
}

// Para que sea utilizado en otras partes lo exportamos
export default MediaPlayer;