sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    if (mySprite2.overlapsWith(mySprite)) {
        sprites.destroy(mySprite)
    }
    
})
let mySprite2 : Sprite = null
let mySprite : Sprite = null
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mySprite = sprites.create(assets.image`
    myImage3
`, SpriteKind.Food)
mySprite2 = sprites.create(assets.image`
    testsprite
`, SpriteKind.Player)
mySprite.setPosition(17, 18)
controller.moveSprite(mySprite2, 100, 100)
