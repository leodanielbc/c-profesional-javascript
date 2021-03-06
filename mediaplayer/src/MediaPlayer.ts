class MediaPlayer {

    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    // El player se va a inicalizar de manera dinamica
    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this); //aqui va tomar como this => player, y con esto solo le damos control al plugin solo a ciertas funciones
        });
    }
    // añadimos metodos a la clase o prototipo, en este caso se llama play
    play() {
        this.media.play(); // leemos media, con this guardamos la instancia de MediaPlayer o cualquier otro objeto
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    muted() {
        return this.media.muted;
    }
}



// Para que sea utilizado en otras partes lo exportamos
export default MediaPlayer;