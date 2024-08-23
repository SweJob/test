mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Player1`, SpriteKind.Player))
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
let mySprite2 = sprites.create(assets.image`testsprite`, SpriteKind.Player)
mySprite2.setPosition(0, 0)
scene.setBackgroundColor(15)
while (!(controller.menu.isPressed())) {
    scene.cameraFollowSprite(mySprite2)
    controller.moveSprite(mySprite2, 100, 100)
}
