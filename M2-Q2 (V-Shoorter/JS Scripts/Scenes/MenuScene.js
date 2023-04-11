class MenuScene extends Phaser.Scene{
    constructor(){
        super('MenuScene');
    }

   preload(){
    this.load.image("BG", "Assets/Images/Back Ground/Back Ground.png");

    this.load.image("Play", "Assets/Images/Buttons/StartButton.png");
    this.load.image("Credits", "Assets/Images/Buttons/Credits.png");
    this.load.image("Exit", "Assets/Images/Buttons/ExitButton.png");

   }

   create(){
    this.add.image(500, 500, "BG");


    let playText = this.add.text(390,220, 'Press to Start',{font: '50px Arial', fill: "white"});
    playText.setInteractive({userHandCursor: true});

    let playButton = this.add.image(525,400, 'Play').setScale(2);
    playButton.setInteractive();
    playButton.on('pointerdown',() => {this.scene.start('GameScene')
});


    let creditButton = this.add.image(200,600, 'Credits').setScale(1);
    creditButton.setInteractive();
    creditButton.on('pointerdown',() => {this.scene.start('CreditScene')});

    let exitButton = this.add.image(850,600, 'Exit');
    exitButton.setInteractive();
    exitButton.on('pointerdown',() => {alert('THANK YOU FOR PLAYING!')});


   }
}