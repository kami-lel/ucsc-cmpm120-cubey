class MouseSmiley extends Phaser.Scene {

    constructor() {
        super("mouseSmiley");

        this.my = {sprite: {}};  // Create an object to hold sprite bindings
    }

    preload() {
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        this.input.on('pointerdown', (pointer) => {
            this.add.sprite(pointer.x, pointer.y, "yellowBody");
            this.add.sprite(pointer.x, pointer.y+20, "smile");
        });

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'
    }

    update() {
    }

}
