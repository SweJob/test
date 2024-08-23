mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
let mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Food)
let mySprite2 = sprites.create(assets.image`testsprite`, SpriteKind.Player)
controller.moveSprite(mySprite2, 100, 100)
