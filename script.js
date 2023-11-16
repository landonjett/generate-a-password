// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function to generate a random password based on the user criteria 
function generatePassword() {
  // Propmt for password length
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
}