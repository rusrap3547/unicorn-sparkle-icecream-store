import * as ex from 'excalibur'

const yunaSheet = new ex.ImageSource('./assets/unicorn.png');
const Yuna = ex.SpriteSheet.fromImageSource({
	image: yunaSheet,
	grid: {
		rows: 16,
		columns: 4,
		spriteHeight: 16,
		spriteWidth: 16
	}
});

