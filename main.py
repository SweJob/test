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
tiles.set_current_tilemap(tilemap("""
    bana
"""))
tiles.place_on_tile(mySprite2, tiles.get_tile_location(20, 20))
while not (controller.menu.is_pressed()):
    scene.camera_follow_sprite(mySprite2)
    controller.move_sprite(mySprite2, 100, 100)