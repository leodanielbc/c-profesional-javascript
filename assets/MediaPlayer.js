function MediaPlayer(config) { //clase
    this.media = config.el
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media, //hace referencia al objeto MediaPlayer dentro del Objeto player
        get muted() { // propiedad virtual
            return this.media.muted;
        },

        set muted(value) { //propiedad virtual
            this.media.muted = value;
        }
    };


    this.plugins.forEach(plugin => {
        plugin.run(player); //aqui va tomar como this => player, y con esto solo le damos control al plugin solo a ciertas funciones
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