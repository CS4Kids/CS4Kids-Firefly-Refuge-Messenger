enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == ":)") {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(":(")
})
let optimalLightLevel = false
let optimalTemp = false
radio.setGroup(1)
loops.everyInterval(500, function () {
    if (input.temperature() > 10 && input.temperature() < 34) {
        optimalTemp = true
    } else {
        optimalTemp = false
    }
    if (input.lightLevel() < 100) {
        optimalLightLevel = true
    } else {
        optimalLightLevel = false
    }
    if (optimalTemp == true && optimalLightLevel == true) {
        servos.P0.setAngle(90)
    } else {
        servos.P0.setAngle(45)
    }
})
