var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 720,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0},
        debug: false,
      },
    },
    scene:[MenuScene, GameScene, CreditScene, EndScene]
  };

  var game = new Phaser.Game(config);

  function collectStar(player, star) {
    star.disableBody(true, true);
    //Character changing color
    

    //  Add and update the scores
    score += 10;
    scoreText.setText("Score: " + score);

    if (stars.countActive(true) === 0) {
      //  A new batch of coins to collect
      stars.children.iterate(function (child) {
        child.enableBody(true, child.x, 0, true, true);
      });
    }
      
    var x = (player.x < 720) ? Phaser.Math.Between(90, 100) : Phaser.Math.Between(100, 90);


    }

  function destroy(laser,asteriods){
    killText+=1;
    Killcount.setText("Asteriod Destroyed: "+killText);

  }
    


  function hitRock(player,asteriods){
    asteriods.disableBody(true,true);

    asteriods.setCollideWorldBounds(true);
    
    this.physics.pause();
    
    player.setTint(0xff0000);
    
    this.scene.start('EndScene');
    }

  function fireLaser(){
    var laser = lasers.get(player.x, player.y - 100, 'laser').setScale(0.5);
    laser.setVelocityY(100);
    laser.body.onWorldBounds = true;
    laser.worldboundsKill = true;
    shootSFX.play();
  }

  

