//Interactable Objects
var player;
var stars;
var asteriod;
var laser;

//Mouse Cursors
 var cursors;
 var spaceKey;

//Text Collections
var score = 0;
var scoreText;
var killText;
var Killcount = 0;

//Sounds Var
var BGM;
var explodeSFX;
var shootSFX;


class GameScene extends Phaser.Scene{ 

  constructor(){
    super('GameScene');
}

preload(){
  this.load.image("bg", "Assets/Images/Back Ground/Back Ground.png");
  this.load.image("stars", "Assets/Images/Others/Mario Star.png");
  this.load.image("asteroids", "Assets/Images/Others/Asteroids.png");
  this.load.spritesheet("spaceship", "Assets/Images/Others/Base sprite.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  this.load.image('laser','Assets/Images/Others/Laser.png');

  //audio
  this.load.audio('bgmusic', 'Assets/Sounds/Team Fortress 2 Soundtrack MEDIC!.mp3');
  this.load.audio('shoot', 'Assets/Sounds/Laser Bullets.wav');
  this.load.audio('destroy', 'Assets/Sounds/Killsound.wav');
  
}

create(){
  //Sounds
  BGM = this.sound.add('bgmusic');
  BGM.loop=true;
  BGM.play();
  BGM.setVolume(0.1);
  explodeSFX= this.sound.add('destroy');

  shootSFX= this.sound.add('shoot');
  //Add Background
  this.add.image(500, 500, "bg");
  

  // The player and its settings
  player = this.physics.add.sprite(200, 450, "spaceship").setScale(2);

  //  Player physics properties.
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  this.physics.add.existing(player);
  player.setVelocityX(200);
  player.setVelocityY(200);

  //Asteriod
  asteriod = this.physics.add.sprite(450,200,'asteroids').setScale(1);

  //Stars
  stars= this.physics.add.group({
    key: 'stars',
    repeat:0,
    allowGravity: true,
    runChildUpdate: true,
    worldBounds: true,
    debug: true,
    setXY: { x: game.config.width * Math.random() - Math.random(80), y: Math.random() * game.config.height - 70, stepX: 40 }
  });

  stars.children.iterate(function (child) {
    
});

 
  

  //Laser Codes
  laser= this.physics.add.group({
    key:'laser',
    allowGravity:true,
    maxSize: 1,
    worldBounds: true,
    setXY:{x:200, y:300 }
  });


  //Cursors and Keyboard codes
  cursors = this.input.keyboard.createCursorKeys();
  spaceKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  
  
//adding Score Text

scoreText = this.add.text(16, 16, "Score: 0", {
    fontSize: "32px",
    fill: "#FFFFFF",
  });

killText = this.add.text(500, 16, "Asteriod Destroyed: 0", {
    fontSize: "32px",
    fill: "#FFFFFF",
  });

//Adding collision

this.physics.add.collider(player, asteriod, hitRock, null, this);
this.physics.add.collider(player, stars, collectStar, null, this);
this.physics.add.overlap(player,stars,collectStar,null,this);
}


update() {
  //Moving the sprite
 if(cursors.left.isDown){
  player.setVelocityX(-200);
 } else if(cursors.right.isDown){
  player.setVelocityX(200);
 } else{
  player.setVelocityX(0);
 }
 if(cursors.up.isDown){
  player.setVelocityY(-200);
 }else if(cursors.down.isDown){
  player.setVelocityY(200);
 }else{
  player.setVelocityY(0);
 }


}

}
