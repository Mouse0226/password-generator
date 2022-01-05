// Determine password length
var passLength = function() {
  var length = 0;
  
  // Prompt user to enter desired length of password between 8 and 128. Loop until valid result is achieved.
  while (length < 8 || length > 128) {
    length = window.prompt("Please enter the desired password length between 8 and 128 characters.");
  }

  console.log("Password length is " + length);
  return passLength;
};

// Boolean result for array determined criteria
var criteriaPrompt = function(criteria) {
  var userResponse = "";
  // Prompt user to determine if password should include criteria passed in by array
  userResponse = window.prompt("Should the password contain " + criteria + " ? Enter 'YES' or 'NO'.")

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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passCrit = ["lower case letters", "upper case letters", "special characters", "numbers"]

  passLength();

  for (i = 0; i < passCrit.length; i++) {
    criteriaPrompt(passCrit[i]);
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  return "somerandomvalue";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
