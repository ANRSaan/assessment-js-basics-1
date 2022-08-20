
var lettersMap = {};
let string = 'abcdefghijklmnopqrstuvwxyz'
for (i in string) {
    lettersMap[string[i]] = null
}

var numbersMap = {}
let numString = '1234567890'
for (i in numString){
    numbersMap[numString[i]] = null
}

let hasLetters = false
let hasNumbers = false
let hasSpaces = false
let hasCaps = false

password = 'asdasdada2Asasd'

if (password.length < 10){
    console.log("oi, bruv, more chars m8")
    return
}
for (i = 0; i < password.length; i++) {
    if (password[i] in lettersMap){
        hasLetters = true
    }
    else if (password[i] in numbersMap){
        hasNumbers = true
    }
    else if (password[i] === password[i].toUpperCase() && isNaN(+password[i]))
    {
        hasCaps = true
    }
    else if (password[i] === ' ')
    {
        hasSpaces = true
    }
}

if (hasLetters && hasNumbers && hasCaps && !hasSpaces){
    console.log("GG boi, u did it")
}
else {
    console.log("soz man, u tried")
}