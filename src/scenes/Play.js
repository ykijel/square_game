class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('square', './Assets/square.png');
        this.load.image('ball', './Assets/ball.png');
    }

    create() {
        // Set background color to white
        this.cameras.main.setBackgroundColor('#ffffff');

        // Add square sprite
        this.square = this.physics.add.image(config.width / 2, config.height / 2, 'square').setScale(0.5);
        this.ball = this.physics.add.image(config.width / 2, 50, 'ball').setScale(0.3);
        // You may need to adjust the positioning based on your game's needs

        // Set up keyboard input
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.rotating = false;
        this.ball.setCollideWorldBounds(true);
        this.ball.setVelocity(0,200);
        this.ball.setBounce(1);
        this.square.setImmovable(true);
        this.physics.add.collider(this.square,this.ball);
        //this.ball.setVelocity(0,-1);
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