
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

password = 'as1213'

if (password.length < 10){
    console.log("oi, bruv, more letters m8")
    return
}
for (i = 0; i < password.length; i++) {
    if (password[i] in lettersMap){
        hasLetters = true
    }
    else if (password[i] in numbersMap){
        hasNumbers = true
    }
}

if (hasLetters && hasNumbers){
    console.log("GG boi, u did it")
}
else {
    console.log("soz man, u tried")
}