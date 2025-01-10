let minNum = 1
let maxnuM = 99
let tries = 1
let random = randint(minNum,maxnuM)

basic.showString("ButtonA - Too High, B - Too low, A+B - Correct")

whaleysans.showNumber(random)

basic.forever(function() {
    input.onButtonPressed(Button.A, function() {
        maxnuM = random - 1
        random = randint(minNum, maxnuM)
        whaleysans.showNumber(random)
        tries+=1
    })

    input.onButtonPressed(Button.B, function () {
        minNum = random + 1
        random = randint(minNum, maxnuM)
        whaleysans.showNumber(random)
        tries+=1
    })

    input.onButtonPressed(Button.AB, function () {
        basic.showString(" Tries")
        basic.showNumber(tries)
        basic.pause(3000)
        control.reset()
    })
})