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

// Validate passowrd length
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Please enter a valid number between 8 and 128.");
  return "";
}

// Prompt for character types
var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

// Validate that at least one character type is selected
if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
  alert("Please select at least one character type.");
  return "";
}

//  Define character sets based on user input 
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-=_+[]{}|;:'\",.<>/?"

// Combine selected character sets 
var allChars = "";
if (includeLowercase) allChars += lowercaseChars;
if (includeUppercase) allChars += uppercaseChars;
if (includeNumeric) allChars += numericChars;
if (includeSpecial) allChars += specialChars;

