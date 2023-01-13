input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 10))
    if (2 == 2) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("G F G C5 G C5 C5 - ", 156)
            basic.showLeds(`
                # # # # #
                . # # # .
                . . # . .
                . . # . .
                . # # # .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showString("BEM VINDO")
basic.showIcon(IconNames.Happy)
