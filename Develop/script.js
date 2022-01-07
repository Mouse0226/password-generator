// Determine password length
var passwordLength = function() {
  var length = 0;
  
  // Prompt user to enter desired length of password between 8 and 128. Loop until valid result is achieved.
  while (length < 8 || length > 128) {
    length = window.prompt("Please enter the desired password length between 8 and 128 characters.");
  }

  if (isNaN(length)) {
    return passwordLength();
  }

  return length;
};

// Boolean result for array determined criteria
var criteriaPrompt = function(criteria) {
  var userResponse = "";
  // Prompt user to determine if password should include criteria passed in by array
  userResponse = window.prompt("Should the password contain " + criteria + "? Enter 'YES' or 'NO'.")

  // Reprompt if null is received
  if (userResponse === "" || userResponse === null) {
    return criteriaPrompt(criteria);
  }

  userResponse = userResponse.toLowerCase();

  if (userResponse === "yes") {
    return true;
  }
  else if (userResponse === "no") {
    return false;
  }
  else {
    window.alert("'" + userResponse + "' is not a valid response, please try again.")
    return criteriaPrompt();
  }
}

// Generate the password for the length and of the values passed in
var createPassword = function(passLength, chars) {
  var password = "";
  var charsLength = chars.length;

  // Random selection of character
  for (i = 0; i < passLength; i++) {
    password += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = 0;
  var passCrit = ["lower case letters", "upper case letters", "special characters", "numbers"]
  var charSelection = "";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = " !#\"$%&'()*+,-./:;<>?@[]^_`{}|~";

  // Determine password length
  passLength = passwordLength();

  // Determine password criteria
  for (i = 0; i < passCrit.length; i++) {
    if (criteriaPrompt(passCrit[i])) {
      switch (passCrit[i]) {
        case ("lower case letters"):
          charSelection = charSelection.concat(lowerChars);
          break;
        case ("upper case letters"):
          charSelection = charSelection.concat(upperChars);
          break;
        case ("special characters"):
          charSelection = charSelection.concat(specialChars);
          break;
        case ("numbers"):
          charSelection = charSelection.concat(numberChars);
          break;
        default:
          console.log(passCrit[i] + " is invalid, criteria skipped.")
          break;
      }
    }
  }

  // Loop function if no criteria is selected
  if (charSelection === "") {
    window.alert("No criteria was established. Please try again.");
    writePassword();
  } 

  var password = createPassword(passLength, charSelection);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
