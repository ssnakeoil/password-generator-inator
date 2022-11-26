// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Characters for generator to pick from
var letterCapital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialNorm = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "-", "<", ">", "/", "?", ",", "."];
var specialWeird = [" ", "[", "]", "{", "}", "|", "~", "`", "_", "+"];
var count = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Series of prompts to customize the user's password
function generatePassword() {
  let passwordLength = prompt("How long would you like your password to be?");
  if (typeof passwordLength === "string") {
    alert("Value entered is not a number. Please choose a number between 4 and 20.");
    generatePassword();
  }
  else if (passwordLength <= 4 || passwordLenght >= 20) {
    alert("Number is not between 4 and 20.");
    generatePassword();
  }
  else {
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
