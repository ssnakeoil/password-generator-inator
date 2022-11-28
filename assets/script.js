// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Characters for generator to pick from
var letterCapital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialNorm = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "-", "<", ">", "/", "?", ",", "."];
var specialWeird = [" ", "[", "]", "{", "}", "|", "~", "`", "_", "+"];
var count = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Series of confirm windows to customize user's password
function generatePassword () {
  
  let settingCapital = confirm("Confirm for capital letters.");
  let settingLower = confirm("Confirm for lowercase letters.");
  let settingNorm = confirm("Confirm for special characters: !@#$%^&*()=-<>/?,.");
  let settingWeird = confirm("Confirm for spaces and special characters: []{}|~`_+");
  let settingCount = confirm("Confirm for numbers.");
  
    // User receives error if no parameters are chosen
  if (!settingCapital && !settingLower && !settingNorm && !settingWeird && !settingCount) {
    alert("Please select one.")
    generatePassword();
  }

  let passwordLength = prompt("How many characters should your password contain? (Must be between 8 and 128)");
  
  // if loop that restricts user to entering numbers only
  if (typeof passwordLength === String) {
    alert("Value entered is not a number. Please choose a number between 4 and 20.");
    generatePassword();
  }
  // restricts user to choosing a number between 8 and 128
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Number is not between 8 and 128.");
    generatePassword();
  }

  // Creating an empty variable to concat onto
  var userPassword = [];

  // Establishing concat action if statements for generator to loop through depending on chosen settings
  if (settingCapital) {var userPassword = userPassword.concat(letterCapital)}
  if (settingLower) {var userPassword = userPassword.concat(letterLower)}
  if (settingNorm) {var userPassword = userPassword.concat(specialNorm)}
  if (settingWeird) {var userPassword = userPassword.concat(specialWeird)}
  if (settingCount) {var userPassword = userPassword.concat(count)}

  // Temporary console.log to see if generator is working correctly at this point. (REMOVE)
  console.log(userPassword)

  // Creating an empty variable for generator to fill into
  var passwordPrintable = ""

  // Adding for loop that will loop through if statements for as many characters as the user selected + randomly pick characters
  for (var i = 0; i < passwordLength; i++) {
    passwordPrintable = passwordPrintable + userPassword[Math.floor(Math.random()*userPassword.length)]
  }
  return passwordPrintable;
  //

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
