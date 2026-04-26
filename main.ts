input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Tortoise)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 262, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.House)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
basic.showIcon(IconNames.Meh)
