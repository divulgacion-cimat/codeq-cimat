basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        basic.pause(1000)
        led.unplot(index, 2)
    }
})
