// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// generates prompts when button is pressed
generateBtn.addEventListener("click", promptMe);
  function promptMe() {
    var pwLength = prompt("How many characters would you like your password to contain?");
    

// // Conditional Statements if user inputs an invalid password length
if (pwLength < 8) {
  alert("Password length must be at least 8 characters");
} else if
  (pwLength > 128) {
  alert("Password must be less than 129 characters");
}

console.log(pwLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    return "temporary password";
    }

  passwordText.value = password;
}


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);