// current password

let password = "hunterasda"

// Creating gigantic arrays with letters and numbers seems like a gross way to do it, but it should work with the .includes() method.  I've included the .toUpperCase() method to check both upper and lowercase letters without the need of looping over an additional array of lowercase letters.

let letters = ["A","B","C","D","E","F","G","H","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers = ["0","1","2","3","4","5","6","7","8","9"]
let letterChecker = false
let numberChecker = false


// For the for loop, I've innitially checked to make sure the password is at least 10 characters, logging a failure state and breaking the loop if it's not.  Next I check to see if each character is either a letter or a number, flipping the boolian value of the relevant Checker variable.  Next I created a seperate "if" statement to check if we've already logged both a character as well as a number, we return a successful password statement and break the loop.

// Finally, I created a statement outside of the "for" loop that checked to see if either the letterChecker or the numberChecker were still in a false state.  If they were, a failure statement was given to the user.

for (i = 0; i < password.length; i++)
{
    if (password.length < 10)
    {
        console.log("Your password needs to be at least 10 characters in length, including both at least one letter and at least one number")
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

    if (letterChecker && numberChecker)
    {
        console.log("Your password is of a valid format!")
        break
    }
}
if (!letterChecker || !numberChecker)
    {   
        {
            console.log("Your password needs to contain at least one letter and at least one number")
        }
    }