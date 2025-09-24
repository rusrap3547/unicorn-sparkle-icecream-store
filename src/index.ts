// import Excalibur from "excaliburjs";
import * as ex from "excalibur";
import Yuna from 'Yuna';
import YunaSprite from './Yuna';
console.log("test");
const SCALE = 2;

const game = new ex.Engine({
	width: 256 * SCALE,
	height: 240 * SCALE,
	fixedUpdateFps: 60,
	antialiasing: false,
	pixelArt: true
});

// Example: create a new Actor and add it to the game
// Create a sprite from the Yuna export and add it to an actor
const yunaActor = new ex.Actor();
const yunaSprite = new ex.Sprite({
	image: YunaSprite,
	destSize: { width: YunaSprite.width, height: YunaSprite.height }
});
yunaActor.graphics.use(yunaSprite);
game.add(yunaActor);
game.add(Yuna);
game.start();
