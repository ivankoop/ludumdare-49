import Phaser from "phaser";
import _ from "lodash";
import BlackHole from "../sprites/BlackHole";
export default class MenuScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: "MenuScene",
    });
  }

  create() {
    // Background
    this.add.sprite(0, 0, "background").setOrigin(0, 0);

    // CREATE PLAYER! :)
    this.blackHole = new BlackHole({
      scene: this,
      key: "blackhole",
      x: this.sys.game.config.width / 2,
      y: this.sys.game.config.height / 2,
    });
  }

  update(time, delta) {
    console.log("update")
    this.blackHole.update(time, delta);
  }

  _matchJoined(matchId) {
    this.scene.start("LobbyScene", {
      matchCode: this.matchCode,
      matchId: matchId,
    });
    this.matchCode = null;
  }
}
