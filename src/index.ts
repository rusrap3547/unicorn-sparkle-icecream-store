// import Excalibur from "excaliburjs";
import * as ex from "excalibur";
import * as yuna from "Yuna";
console.log("test");
const SCALE = 2;

const game = new ex.Engine({
	width: 256 * SCALE,
	height: 240 * SCALE,
	fixedUpdateFps: 60,
	antialiasing: false,
	pixelArt: true
});

// Create an actor and assign the animation to its graphics
const yunaActor = new ex.Actor({
	pos: ex.vec(100, 100), // Set initial position as needed
	width: 32,
	height: 32
});
// Ensure yuna.yunaAnimations.walking is an ex.Animation or ex.Graphic
// If it's a sprite or frames array, create an Animation first:
const walkingAnimation = new ex.Animation({
  frames: yuna.yunaAnimations.walking, // Make sure this is an array of ex.AnimationFrame
  frameDuration: 100 // Adjust as needed
});
yunaActor.graphics.use(walkingAnimation);

game.add(yunaActor);

game.start();
