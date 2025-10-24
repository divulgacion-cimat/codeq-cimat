input.onGesture(Gesture.Shake, function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plot(i, j)
        }
        basic.pause(1000)
        for (let j = 0; j <= 4; j++) {
            led.unplot(i, j)
        }
    }
})
