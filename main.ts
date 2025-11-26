basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # # # # #
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    `)
basic.forever(function () {
    music.play(music.stringPlayable("A G E F D E G F ", 40), music.PlaybackMode.LoopingInBackground)
})
