
class EndScene extends Phaser.Scene{
    constructor(){
        super('EndScene');
    }

    preload(){
        this.load.image("BGE", "Assets/Images/Back Ground/Back Ground.png");
        this.load.image("Restart", "Assets/Images/Buttons/RestartButton.png");
        this.load.image("back", "Assets/Images/Buttons/BackButton.png");
      
    
    }

    create(){
        //Game Over Sound
     


        this.add.image(500, 500, 'BGE');

        let gameOverText = this.add.text(350,200, 'GAME OVER!',{font: '50px Arial', fill: "Red"});
    gameOverText.setInteractive({userHandCursor: true});

        let restartButton = this.add.image(500,400, 'Restart').setScale(2);
        restartButton.setInteractive();
        restartButton.on('pointerdown',() => {this.scene.start('GameScene')});

        

        let backButton = this.add.image(150,600, 'back').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
       
}