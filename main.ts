input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Tortoise)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 262, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Angry)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.showIcon(IconNames.House)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
    }
})
basic.showIcon(IconNames.Meh)
