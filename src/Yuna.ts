import * as ex from "excalibur";

const yunaSprite = new ex.ImageSource("./assets/unicorn.png");
export const yunaSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: yunaSprite,
    grid: {
        rows: 4,
        columns: 16,
        spriteWidth: 32,
        spriteHeight: 32
    }
});

// Define animations for each moveset (assuming rows represent movesets)
export const yunaAnimations = {
    standing: ex.Animation.fromSpriteSheet(yunaSpriteSheet, [0, 2, 1, 3], 200),
    walking: ex.Animation.fromSpriteSheet(yunaSpriteSheet, [5, 6, 7, 8], 100),
    jumping: ex.Animation.fromSpriteSheet(yunaSpriteSheet, [5, 6, 7], 150),
    attacking: ex.Animation.fromSpriteSheet(yunaSpriteSheet, [8, 9, 10, 11], 100),
    special: ex.Animation.fromSpriteSheet(yunaSpriteSheet, [12, 13, 14, 15], 120)
};