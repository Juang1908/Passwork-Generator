// Assignment Code
var generateBtn = document.querySelector("#generate");

//return radom int ranging from mix to max and if max not defined, we want range from 0 to min
function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }
var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}



function getRandomItem(list) {
    return list[randomInt(0, list.length - 1)]
}
function generatePassword(){

var userinput = window.prompt("Password Length")

var passwordLength = parseInt(userinput)
// alert if inputs letters or symbols instead of numbers
if (isNaN(passwordLength)) {
    window.alert ("Not a number!")
    return
    // alert if input is a number
}

if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Pasword length must be between 8 and 128 characters")
    return
}
// ASK user for input on any of these;
var userForNumbers = window.confirm("Would you like to include NUMBERS in your password?")
var userForCharacters = window.confirm("Would you like to include SPECIAL CHARACTERS in your password?")
var userForLowercase = window.confirm("Would you like to include LOWERCASE lettersin your password?")
var userForUppercase = window.confirm("Would you like to include UPPERCASE letters in your password?")

// input list
var numList = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = [ " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "\", "^", " ]
var lowercaseList = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = []

var optionsCart = []

for ( var i = 0; i < lowercaseList.length; i++ ) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userForNumbers === true) {
    optionsCart.push(numList)
}

if (userForCharacters === true) {
    optionsCart.push(symbolList)
}

if (userForLowercase === true) {
    optionsCart.push(lowercaseList)
}

if (userForUppercase === true) {
    optionsCart.push(uppercaseList)
}
if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
}
// this will generate a random password
var generatedPassword = ""

for (var i = 0; i < passwordLength; i++){
   var randomList = getRandomItem(optionsCart)
   var randomChar = getRandomItem(randomList)
   generatedPassword += randomChar
}

return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
