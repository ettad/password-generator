// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "012345678";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var spacialChar="!@#$%^&*()_-";
var temp = "";
var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() 
{
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value="";
  var passwordLength = prompt('How long is your password (8-128)?');
  
  if (passwordLength <8 || passwordLength > 128 )
  {
    console.log(passwordLength);
    alert('Password lenght is not within range');
    return writePassword();
  };
  
  var inputCahr = confirm ("Do you want spacial characters?");
  
  
  if(inputCahr)
  {
    temp += spacialChar;
  };
  
  var inputLower = confirm ("Do you want lowercase?");
  
  if(inputLower == true)
  {
    temp += lowerCase;
  };
  
  var inputUpper = confirm ("Do you want uppercase?");
  
  if(inputUpper == true)
  {
    temp += lowerCase.toUpperCase();
  };
  
  var inputNum = confirm ("Do you want numbers?");

    if(inputNum == true)
    {
      temp += numbers;
    };

    if (inputCahr == false && inputLower == false && inputUpper == false && inputNum == false)
    {
      alert("you must select one of the options")
      return writePassword();
    }
  //generates the random password
  for (let i = 0; i < passwordLength; i++) {
    password += temp[Math.floor(Math.random()*temp.length)];
    
  }


  passwordText.value = password;

}

