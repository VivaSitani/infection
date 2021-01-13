radio.setGroup(1)

input.onButtonPressed(Button.A, function () {
    radio.sendString("YES")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("NO")
})

input.onGesture(Gesture.Shake, function () {
    radio.sendString("RUN")
})

basic.forever(function () {
    if (input.lightLevel () < 50) {
        radio.sendString("HIDE")
    }
})

radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})