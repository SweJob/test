sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (mySprite2.overlapsWith(mySprite)) {
        sprites.destroy(mySprite, effects.fire, 500)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 1) {
            mySprite = sprites.create(assets.image`myImage4`, SpriteKind.Food)
            mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 2) {
            mySprite = sprites.create(assets.image`myImage`, SpriteKind.Food)
            mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 3) {
            mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Food)
            mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == 4) {
            mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Food)
            mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        } else {
            game.gameOver(true)
        }
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Food)
mySprite2 = sprites.create(assets.image`testsprite`, SpriteKind.Player)
mySprite.setPosition(17, 18)
controller.moveSprite(mySprite2, 100, 100)
