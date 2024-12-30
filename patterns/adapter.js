// Example 1
// Lớp cũ (Adaptee)
class OldSystem {
    oldMethod() {
        console.log("Executing old method");
    }
}

// Giao diện mà Client mong muốn (Target)
class Target {
    newMethod() {
        throw "newMethod should be implemented!";
    }
}

// Adapter - Chuyển đổi phương thức cũ thành phương thức mới
class Adapter extends Target {
    constructor(oldSystem) {
        super();
        this.oldSystem = oldSystem;
    }

    newMethod() {
        console.log("Adapting old method to new method:");
        this.oldSystem.oldMethod();  // Chuyển lời gọi sang phương thức cũ
    }
}

// Client usage
const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
adapter.newMethod();  // Output: Adapting old method to new method: Executing old method


// Example 2
// Lớp cũ (Adaptee)
class VlcPlayer {
    playVlc() {
        console.log("Playing VLC format");
    }
}

class Mp4Player {
    playMp4() {
        console.log("Playing MP4 format");
    }
}

// Giao diện chung mà Client mong muốn (Target)
class MediaPlayer {
    play(format) {
        throw "play method should be implemented!";
    }
}

// Adapter cho VlcPlayer
class VlcAdapter extends MediaPlayer {
    constructor(vlcPlayer) {
        super();
        this.vlcPlayer = vlcPlayer;
    }

    play() {
        this.vlcPlayer.playVlc();
    }
}

// Adapter cho Mp4Player
class Mp4Adapter extends MediaPlayer {
    constructor(mp4Player) {
        super();
        this.mp4Player = mp4Player;
    }

    play() {
        this.mp4Player.playMp4();
    }
}

// Client usage
const vlcPlayer = new VlcPlayer();
const mp4Player = new Mp4Player();

const vlcAdapter = new VlcAdapter(vlcPlayer);
const mp4Adapter = new Mp4Adapter(mp4Player);

vlcAdapter.play();  // Output: Playing VLC format
mp4Adapter.play();  // Output: Playing MP4 format

