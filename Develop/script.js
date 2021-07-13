// Get password length
var passwordLength = function() {
    var lengthNum = window.prompt(
            "How many characters would you like in your password? Choose a length that is at least 8 characters and no more than 128 characters.");

    if (Number.isInteger(parseInt(lengthNum))) {
        if (lengthNum && lengthNum >= 8 && lengthNum <= 128) {
            console.log(lengthNum);
            return lengthNum;
        } else {
            // Have the user enter again if the number doesn't fit with the acceptable range
            window.alert("Pick a number that is at least 8 and no more than 128.");
            return passwordLength();
        }
    }
    // If it's not an integer, have the user enter again
    else {
        window.alert("You need to enter a number.");
        return passwordLength();
    }
};

// Check what options the user wants for their password
var characterType = function() {

    var charTypes = ""

    var lowercase = window.confirm("Would you like to include lowercase letters?");
    var uppercase = window.confirm("Would you like to include uppercase letters?");
    var numeric = window.confirm("Would you like to include numeric characters?");
    var special = window.confirm("Would you like to include special characters?");

    if (lowercase) {
        charTypes += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        charTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numeric) {
        charTypes += "0123456789";
    }
    if (special) {
        charTypes += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    } // If they don't pick any of the options, show an alert
    else if (!lowercase && !uppercase && !numeric && !special) {
        window.alert("You need to include at least one of the character types.");
        return characterType();
    }
    return charTypes;
}

// Generate the password
var generatePassword = function(length, charType) {
    var password = "";

    // Get random characters from the string. Number of characters is the length the user entered
    for (var i = 0; i < length; i++) {
        password+=charType.charAt(Math.random()*charType.length);
    }
    console.log(charType);
    console.log("the password?? " + password);
    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var charType = characterType();
    var length = passwordLength(); 
    var password = generatePassword(length, charType);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log("the password" + password);
    console.log(length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);