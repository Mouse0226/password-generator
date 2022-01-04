var passLength = function() {
  var length = 0;
  
  while (length < 8 || length > 128) {
    length = prompt("Please enter the desired password length between 8 and 128 characters.");
  }

  console.log("Password length is " + length);
  return passLength;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passLength();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  return "somerandomvalue";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
