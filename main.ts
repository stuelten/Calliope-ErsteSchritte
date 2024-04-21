input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    images.iconImage(IconNames.Rollerskate).showImage(0)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(784, music.beat(BeatFraction.Whole))
})
basic.setLedColors(0xff9da5, 0x00ffff, 0xb09eff)
basic.forever(function () {
    basic.setLedColors(0xff0000, 0xff8000, 0xffff00)
    basic.showString("Frieda", 50)
    basic.pause(2000)
    basic.setLedColors(0x00ff00, 0x00ffff, 0x0000ff)
    basic.pause(500)
})
