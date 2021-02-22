var specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "[", "]", "{", "}", "\\", ":", ";", "'", "\"", "<", ">", ",", ".", "/", "?"];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var letterChars = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var uppercaseChars = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

// This marks the user entered length of their choice
var passwordLength;

// These are the variables holding the boolean values of the selected options for a password
var numSelect;
var lowercaseSelect;
var uppercaseSelect;
var specialSelect;

// This blank array is intended for use as a variable for the concatenated 
// character arrays that are selected by the user
var selectedCriteria = [];

// This blank array is intended to be used as the transfer variable array
var randomPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This queues the start of the main function
function generatePassword () {
  
  passwordLength = prompt("Enter a password length between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);
    
  // Here is where we check if they entered a value
  if (!passwordLength) {
    alert("Please enter a correct value to continue");

    // This else if checks if the length is within 8-128
  } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a length between 8 and 128 characters");

    // These appear as prompts, to which the user can confirm or deny whether or not 
    // they want special characters, numbers, lowercase, and/or uppercase numbers
  }else {
      specialSelect = confirm("Would you like special characters?");
      lowercaseSelect = confirm("Would you like lowercase letters?");
      uppercaseSelect = confirm("Would you like upper case letters also?");
      numSelect = confirm("Would you like numbers?");

      criteriaAlert();
  };

  //-------------------------------------------------------------------------------------

  // Here is the for loop that loops through the concatenated array of selected criterion
  for (var i = 0; i < passwordLength; i++) {
    var randChars = selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
    randomPassword.push(randChars);
  }
  // this converts the new array of random characters into a string
  var pass = randomPassword.join("");
  return pass;
};

function criteriaAlert() {
  // These if statements test what criteria the user selected
  if (specialSelect) {
    selectedCriteria = selectedCriteria.concat(specialChars);
 };  
 if (numSelect) {
   selectedCriteria = selectedCriteria.concat(numberChars);
 }; 
 if (lowercaseSelect) {
   selectedCriteria = selectedCriteria.concat(letterChars);
 }; 
 if (uppercaseSelect) {
   selectedCriteria = selectedCriteria.concat(uppercaseChars);
 };

 if (!specialSelect && !numSelect && !lowercaseSelect && !uppercaseSelect) {
   alert("You must select at least one of the provided criteria")
 };
};
