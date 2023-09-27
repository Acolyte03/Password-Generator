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


var lowerCha = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", 
"a", "s", "d", "f", "g", "h", "j", "k", "l", 
"z", "x", "c", "v", "b", "n", "m"];
var upperCha = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
"A", "S", "D", "F", "G", "H", "J", "K", "L", 
"Z", "X", "C", "V", "B", "N", "M",];
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var specialCha = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", 
")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'",
",", "<", ".", ">", "/", "?"];

function generatePassword()
{
// var numChar = window.prompt;
// var includesomething = window.confirm; true/false

// var numArray["0","1","2","3","4","5","6","7","8","9"];
// array for each char type

// if statement
  // if true push/concat the true array into a new array

  // for loop on numChar window.prompt
  // random index value for every loop
  // How to randomly choose a value from an array
  // var chosenArr- [];
  // turn array into string, new string name is called password
  return password;
}
