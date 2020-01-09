class AutoPause {

    constructor() {
        this.threshold = 0.45;
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media)

    }


    handleIntersection(entries) {
        const entry = entries[0];

        const isvisible = entry.intersectionRatio >= this.threshold;

        if (isvisible) {
            this.player.play();
        } else {
            this.player.pause();
        }


        console.log(entry);
    }
}

export default AutoPause;