
var EL = document.getElementById("password");
var button = document.getElementById("gen");

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var uppercaseChar = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseChar = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericChar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let passwordLength ;
let special ;
let uppercase ; 
let lowercase;
let numeric;

button.addEventListener("click", function promptUser(){
    passwordLength = prompt("Please enter password length");
    special = confirm("include special characters?");
    uppercase = confirm("include uppercase characters?"); 
    lowercase = confirm("include lowercase characters?");
    numeric = confirm("include numeric characters?");

    let hasCharType = uppercase || lowercase ? true : false;
    let validLength  = passwordLength >= 8 && passwordLength >=128 ? true : false;

    if((hasCharType === false && validLength === false) || passwordLength === "0"){
        alert("Input was invalid please try again");
        
    }else{
        genpass();
    }
});

function genpass(){
        var bagchars = [];
    if(special){
        bagchars.push(specialChar); 
    }
    if(uppercase){ 
        bagchars.push(uppercaseChar);
    }
    if(lowercase){
        bagchars.push(lowercaseChar);
    }
    if(numeric){
        bagchars.push(numericChar);
    }

    var password = "";
    for(var i = 0; i < passwordLength; i++){
        let randomType = Math.floor(Math.random() * bagchars.length) + 0;
        let randomCharacter = Math.floor(Math.random() * bagchars[randomType].length) + 0;
        password += bagchars[ randomType ][ randomCharacter ];
    }
    
    EL.textContent = password;
}



