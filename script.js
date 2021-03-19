// Global variable
var generateBtn = document.querySelector("#generate");

//prompts user for password length
function generatePassword() {
  var pwLength = prompt(
    "How many characters would you like your password to contain?"
  );

  // // Conditional Statements if user inputs an invalid password length
  if (pwLength < 8) {
    alert("Password length must be at least 8 characters");
    return generatePassword();
  } else if (pwLength > 128) {
    alert("Password must be less than 129 characters");
    return generatePassword();
  }
  console.log(pwLength);

  // Confirm character types to include in the password
  var characterSpecial = confirm(
    "Click OK to confirm including special characters."
  );
  console.log(characterSpecial);
  var numeric = confirm("Click OK to confirm including numeric characters");
  console.log(numeric);
  var lowerCase = confirm("Click OK to confirm including lowercase letter");
  console.log(lowerCase);
  var upperCase = confirm("Click OK to confirm including uppercase letter");
  console.log(upperCase);

  // Arrays for each available character type
  var lowercaseOptions = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseOptions = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolOptions = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    "-",
    ".",
    "=",
    "?",
    "@",
  ];
  var posCharacters = [];

  // Adds array option to the empty string if selected by the user
  if (characterSpecial) {
    posCharacters = posCharacters.concat(symbolOptions);
  }
  if (numeric) {
    posCharacters = posCharacters.concat(numberOptions);
  }
  if (lowerCase) {
    posCharacters = posCharacters.concat(lowercaseOptions);
  }
  if (upperCase) {
    posCharacters = posCharacters.concat(uppercaseOptions);
  }

  // logs the password to the console
  let randomStringOutput = writePassword(pwLength, posCharacters);
  console.log("output " + randomStringOutput);

  // shows the password in the input text area on the webpage
  var passwordText = document.querySelector("#password");
  passwordText.value = randomStringOutput;
}

// For loop to generate a random string with user's character type choices
function writePassword(pwLength, posCharacters) {
  var randomString = " ";
  for (var i = 0; i < pwLength; i++) {
    randomString +=
      posCharacters[Math.floor(Math.random() * posCharacters.length)];
  }
  console.log(randomString);
  return randomString;
}

// EventListener added to the Generate button
generateBtn.addEventListener("click", generatePassword);
