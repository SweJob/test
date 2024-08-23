def on_on_overlap(sprite, otherSprite):
    if mySprite2.overlaps_with(mySprite):
        sprites.destroy(mySprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

mySprite2: Sprite = None
mySprite: Sprite = None
mp.set_player_state(mp.player_selector(mp.PlayerNumber.ONE),
    MultiplayerState.score,
    0)
mySprite = sprites.create(assets.image("""
    myImage3
"""), SpriteKind.food)
mySprite2 = sprites.create(assets.image("""
    testsprite
"""), SpriteKind.player)
mySprite.set_position(17, 18)
controller.move_sprite(mySprite2, 100, 100)