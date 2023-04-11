 class CreditScene extends Phaser.Scene{
    constructor(){
        super('CreditScene');
    }

 preload(){
    this.load.image("BGC", "Assets/Images/Back Ground/Back Ground.png");
    
    this.load.image("Back", "Assets/Images/Buttons/BackButton.png");

    this.load.image("Me", "Assets/Images/Others/Tabuno.png");
 }

 create(){
    this.add.image(500, 500, 'BGC');

    let restartButton = this.add.image(530,200, 'Me').setScale(1);
        restartButton.setInteractive();

    let creditText = this.add.text(200,500, 'JESHCEE JAY R. TABUNO',{font: '50px Arial', fill: "White"});
    creditText.setInteractive({userHandCursor: true});
   
  
    let sectionText = this.add.text(400,600, 'EMC - A223',{font: '50px Arial', fill: "White"});
    sectionText.setInteractive({userHandCursor: true});



    let backButton = this.add.image(100,650, 'Back').setScale(1);
    backButton.setInteractive();
    backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
 }

}