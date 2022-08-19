// current password

let password = "aASDASka230123фqw;a2d"

// Creating gigantic arrays with letters and numbers seems like a gross way to do it, but it should work with the .includes() method.  I've included the .toUpperCase() method to check both upper and lowercase letters without the need of looping over an additional array of lowercase letters.

let letters = ["A","B","C","D","E","F","G","H","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers = ["0","1","2","3","4","5","6","7","8","9"]
let letterChecker = false
let numberChecker = false


for (i = 0; i < password.length; i++)
{
    if (password.length < 10)
    {
        console.log("Your password needs to be at least 10 characters in length, including both at least one letter and at least one number")
        break
    }
    else if (letterChecker === true && numberChecker === true)
    {
        console.log("Your password is of a valid format!")
        break
    }
    else if (letters.includes(password[i].toUpperCase(password[i])))
    {
        letterChecker = true
    }
    else if (numbers.includes(password[i]))
    { 
        numberChecker = true
    }
    else if (i >= password.length - 1 && !letterChecker && !numberChecker)
    {
        console.log("Your password needs to contain at least one letter and at least one number")
    }
}