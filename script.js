var specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "[", "]", "{", "}", "\\", ":", ";", "'", "\"", "<", ">", ",", ".", "/", "?"];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var letterChars = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var uppercaseChars = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

var passwordLength;

var numSelect;
var lowercaseSelect;
var uppercaseSelect;
var specialSelect;
var selectedCriteria;

var randomPassword = [];

// This queues the start of the main function
function generatePass () {
  passwordLength = prompt("Enter a password length between 8 and 128 characters.");
    
  // Here is where we check if they entered a value
  if (!passwordLength) {
    alert("This is required!");

    // This else if checks if the length is within 8-128
  } else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Please enter a length between 8 and 128 characters");
      
  } else {
      numselect = confirm("Do you need numbers?");
      lowercaseSelect = confirm("Do you need lowercase letters?");
      uppercaseSelect = confirm("Do you need upper case letters also?");
      specialSelect = confirm("Do you need special characters?");
  };

  // singular cases
  if (specialSelect) {
    selectedCriteria = specialChars;
  } else if (numSelect) {
    selectedCriteria = numberChars;
  } else if (lowercaseSelect) {
    selectedCriteria = letterChars;
  } else if (uppercaseSelect) {
    selectedCriteria = uppercaseChars;
  
    // paired cases
  } else if (specialSelect && numSelect) {
    selectedCriteria = specialChars.concat(numberChars);
  } else if (specialSelect && lowercaseSelect) {
    selectedCriteria = specialChars.concat(letterChars);
  } else if (specialSelect && uppercaseSelect) {
    selectedCriteria = specialChars.concat(uppercaseSelect);
  } else if (numSelect && lowercaseSelect) {
    selectedCriteria = numberChars.concat(letterChars);
  } else if (numSelect && uppercaseSelect) {
    selectedCriteria = numberChars.concat(uppercaseChars);
  } else if (lowercaseSelect && uppercaseSelect) {
    selectedCriteria = letterChars.concat(uppercaseChars);
  
    // triplet combinations
  } else if (specialSelect && numSelect && lowercaseSelect) {
    selectedCriteria = specialChars.concat(numberChars, letterChars);
  } else if (specialSelect && numSelect && uppercaseSelect) {
    selectedCriteria = specialChars.concat(numberChars, uppercaseChars);
  } else if (specialSelect && lowercaseSelect && uppercaseSelect) {
    selectedCriteria = specialChars.concat(letterChars, uppercaseChars);
  } else if (numSelect && lowercaseSelect && uppercaseSelect) {
    selectedCriteria = numberChars.concat(letterChars, uppercaseChars);
  
    // This throws an alert when they select none 
    // of the criterion for password character selection
  } else if (!numSelect && !lowercaseSelect && !uppercaseSelect && !specialSelect) {
    alert("You must select at least one of the criterion.")
    
    // This is when they select all four possible criterion
  } else {
    selectedCriteria = specialChars.concat(numberChars, letterChars, uppercaseChars);
  };

  // Here is the for loop that loops through the concatenated array of 
  for (var i = 0; i < passwordLength; i++) {
    var randChars = selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
    randomPassword.push(randChars);
  }
  var pass = randomPassword.join("");
  return pass;
};



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
