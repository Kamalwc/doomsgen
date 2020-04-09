
// <!-- a) length of password (numeric input)
let passwordLength = prompt("Please enter password length");

// b) validate length is between 8 and 128.
let validLength  = passwordLength >= 8 && passwordLength >=128 ? true : false;

// c) type of characters to include - special characters, uppercase, lowercase, numeric(series of yes/no confirms)
let special = confirm("include special characters?");
let uppercase = confirm("include uppercase characters?"); 
let lowercase = confirm("include lowercase characters?");
let numeric = confirm("include numeric characters?");

// d) Validate the user selected at least one character type.
let hasCharType = uppercase || lowercase ? true : false;

//if D or B are false start over 
// PRESSING "GENERATE PASSWORD BUTTON" TRIGGERS THE METHOD TO ASK PROMPTS
// once they input invalid response call the main trigger method again
// dont set invalid variable to false instead trigger the method there
// Any invalid response will terminate password generation and the user must start over.
if(/*false*/){
    //start over 
}else{
    //generate password
}

while()

// Once the user has entered valid responses, generate a password that meets their criteria and display it in the box. -->