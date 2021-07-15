// Get password length
const passwordLength = function() {
    const lengthNum = window.prompt(
            "How many characters would you like in your password? Choose a length that is at least 8 characters and no more than 128 characters.");

    if (Number.isInteger(parseInt(lengthNum))) {
        if (lengthNum && lengthNum >= 8 && lengthNum <= 128) {
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
const characterType = function() {

    let charTypes = ""

    const lowercase = window.confirm("Would you like to include lowercase letters?");
    const uppercase = window.confirm("Would you like to include uppercase letters?");
    const numeric = window.confirm("Would you like to include numeric characters?");
    const special = window.confirm("Would you like to include special characters?");

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
const generatePassword = function(length, charType) {
    let password = "";

    // Get random characters from the string. Number of characters is the length the user entered
    for (let i = 0; i < length; i++) {
        password+=charType.charAt(Math.random()*charType.length);
    }
    return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    const charType = characterType();
    const length = passwordLength(); 
    const password = generatePassword(length, charType);
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);