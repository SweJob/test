mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
    sprites.create(assets.image("""
        Player1
    """), SpriteKind.player))
mp.set_player_state(mp.player_selector(mp.PlayerNumber.ONE),
    MultiplayerState.score,
    0)
mySprite2 = sprites.create(assets.image("""
    testsprite
"""), SpriteKind.player)
controller.move_sprite(mySprite2, 100, 100)