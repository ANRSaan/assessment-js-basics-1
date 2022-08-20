

let password = "Adaasdasdasds9's"

function letterChecker(password)
{
    var lettersMap = {};
    let string = 'abcdefghijklmnopqrstuvwxyz'
    for (i in string)
    {
        lettersMap[string[i]] = null
    }

    for (i = 0; i < password.length; i++)
    {
        if (password[i] in lettersMap)
            {
                return true
            }
    }
}

function numberChecker(password)
{
    var numbersMap = {}
    let numString = '1234567890'
    for (i in numString)
    {
        numbersMap[numString[i]] = null
    }

    for (i = 0; i < password.length; i++)
    {
        if (password[i] in numbersMap)
            {
                return true
            }
    }
}

function upperChecker(password)
{
    for (i = 0; i < password.length; i++)
    {
        if (password[i] === password[i].toUpperCase() && isNaN(+password[i]))
        {
            return true
        }
    }
}

function spaceChecker(password)
{
    for (i = 0; i < password.length; i++)
    {
        if (password[i] === ' ')
        {
            return true
        }
    }
}

function lengthChecker(password)
{
    if (password.length >= 10 && password.length <= 20)
    {
        return true
    }
}


if (letterChecker(password) && numberChecker(password) && upperChecker(password) && lengthChecker(password) && !spaceChecker(password))
{
    console.log("u did it")
}
else
{
    console.log("nope")
}