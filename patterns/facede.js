// Subsystem Classes
class Amplifier {
    on() {
        console.log("Amplifier is ON");
    }
    off() {
        console.log("Amplifier is OFF");
    }
}

class CdPlayer {
    on() {
        console.log("CD Player is ON");
    }
    off() {
        console.log("CD Player is OFF");
    }
    play() {
        console.log("Playing CD...");
    }
}

class Projector {
    on() {
        console.log("Projector is ON");
    }
    off() {
        console.log("Projector is OFF");
    }
    focus() {
        console.log("Projector is focused");
    }
}

// Facade Class
class HomeTheaterFacade {
    constructor(amplifier, cdPlayer, projector) {
        this.amplifier = amplifier;
        this.cdPlayer = cdPlayer;
        this.projector = projector;
    }

    watchMovie() {
        console.log("Get ready to watch a movie...");
        this.projector.on();
        this.projector.focus();
        this.amplifier.on();
        this.cdPlayer.on();
        this.cdPlayer.play();
    }

    endMovie() {
        console.log("Shutting down the home theater...");
        this.projector.off();
        this.amplifier.off();
        this.cdPlayer.off();
    }
}

// Client usage
const amplifier = new Amplifier();
const cdPlayer = new CdPlayer();
const projector = new Projector();

const homeTheater = new HomeTheaterFacade(amplifier, cdPlayer, projector);

homeTheater.watchMovie();
// Output:
// Get ready to watch a movie...
// Projector is ON
// Projector is focused
// Amplifier is ON
// CD Player is ON
// Playing CD...

homeTheater.endMovie();
// Output:
// Shutting down the home theater...
// Projector is OFF
// Amplifier is OFF
// CD Player is OFF
