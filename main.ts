input.onPinPressed(TouchPin.P0, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    pic_1_player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.B, function () {
    pic_1_player.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let score = 0
let pic_1_player: game.LedSprite = null
basic.showString("Hello!")
pic_1_player = game.createSprite(2, 4)
let falling_sprite = game.createSprite(randint(0, 5), 2)
score = 0
loops.everyInterval(500, function () {
    falling_sprite.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (pic_1_player.isTouching(falling_sprite)) {
        score += 1
        falling_sprite.delete()
        falling_sprite = game.createSprite(randint(0, 5), 0)
    }
})
basic.forever(function () {
    if (pic_1_player.isTouching(falling_sprite)) {
        music.playMelody("- C5 - - - - - - ", 120)
    }
})
basic.forever(function () {
    if (pic_1_player.isTouching(falling_sprite)) {
        score += 1
        falling_sprite.delete()
        falling_sprite = game.createSprite(randint(0, 5), 0)
    }
})
