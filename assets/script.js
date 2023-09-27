// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var finishedPassword = document.querySelector("#password");

  finishedPassword = password;

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
var finishedPassword;
var applicable = [];

if(generateBtn.addEventListener("click", function generatePasswords()
{
  var numberOfChar = window.prompt("How many characters would you like your password to be?");
  console.log(numberOfChar);

  var yesSpecial = window.confirm("Would you like to include special characters in your password?");
  console.log(yesSpecial);

  var yesLower = window.confirm("Would you like to include lower case letters in your password?");
  console.log(yesLower);

  var yesUpper = window.confirm("Would you like to include Upper case letters in your password?");
  console.log(yesUpper);

  var yesNums = window.confirm("Would you like to include numbers in your password?");
  console.log(yesNums);

  if(yesSpecial)
    applicable = applicable.concat(specialCha);

  if(yesLower)
    applicable = applicable.concat(lowerCha);

  if(yesUpper)
    applicable = applicable.concat(upperCha);

  if(yesNums)
    applicable = applicable.concat(nums);

  for(i = 0; i < numberOfChar; i++)
  {
    finishedPassword = applicable[Math.floor(Math.random()*applicable.length)];
    return finishedPassword;
  }
  console.log(finishedPassword);

}))


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
