mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Player1`, SpriteKind.Player))
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
while (!(controller.A.isPressed())) {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
}
