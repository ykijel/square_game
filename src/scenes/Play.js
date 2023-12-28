class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('square', './Assets/square.png');
    }

    create() {
        // Set background color to white
        this.cameras.main.setBackgroundColor('#ffffff');

        // Add square sprite
        this.square = this.add.sprite(config.width / 2, config.height / 2, 'square');
        // You may need to adjust the positioning based on your game's needs

        // Set up keyboard input
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.rotating = false;
    }

    update() {
      // Check if the left key is being held down
      if (Phaser.Input.Keyboard.JustDown(keyLEFT) && !this.rotating) {
          this.rotateSquare(-90); // Rotate counterclockwise
      }
  
      // Check if the right key is being held down
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT) && !this.rotating) {
          this.rotateSquare(90); // Rotate clockwise
      }
  }
  
  rotateSquare(rotationAmount) {
      const duration = 100; // Duration of the rotation animation in milliseconds
      this.rotating = true;
  
      this.tweens.add({
          targets: this.square,
          angle: this.square.angle + rotationAmount,
          duration: duration,
          ease: 'Linear', // You can use other easing functions as well
          onComplete: () => {
            // Set rotationInProgress to false when the animation is complete
            this.rotating = false;
        }
    });
  }
}