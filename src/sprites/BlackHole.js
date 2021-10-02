export default class BlackHole extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
      super(config.scene, config.x, config.y, config.key, config.name);
      config.scene.sys.updateList.add(this);
      config.scene.sys.displayList.add(this);
      
      config.scene.add.existing(this);
      config.scene.physics.world.enableBody(this);
      this.setCollideWorldBounds(true);

      this.setScale(2)
    }
  
    update(_time, _delta) {
        this.angle -=1
    }
  }
  