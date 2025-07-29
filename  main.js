import Excalibur from "excaliburjs";
import * as ex from Excalibur

const SCALE = 2;

const game = new ex.Engine({
    width: 256 * SCALE,
    height: 240 * SCALE,
    fixedUpdateFps: 60,
    anialiasing: false,
});

const loader = new ex.Loader();
const playerImage = new ex.ImageSource('./assets/unicorn.png');
loader.addResource(playerImage)