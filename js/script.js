const length = document.getElementById("slider");
const sliderText = document.getElementById("sliderText");
const uppercase = document.getElementById("uppercase");
const symbol = document.getElementById("symbol");
const number = document.getElementById("number");
const passwordField = document.getElementById("passwordField");
let generatedPassword;
let charset = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbolCharset = "!@#$%^&*()_+-={}[]|:;<>,.?/";
let numberCharset = "0123456789";


function generate(){
    let pasLength = length.value;
    generatedPassword = "";
    charset = "abcdefghijklmnopqrstuvwxyz";

    if (uppercase.checked) {
        charset += upperCase;
    }
    if (symbol.checked) {
        charset += symbolCharset;
    }
    if (number.checked) {
        charset += numberCharset;
    }

    for (let i = 0; i < pasLength; i++) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    passwordField.value = generatedPassword; // Fixing incorrect variable name

    // Scroll into view smoothly
    document.querySelector(".box").scrollIntoView({ behavior: "smooth" });
}


let passwordInput = document.getElementById('passwordTester');

function ShowPassword(){
    if(passwordTester.type === "password"){
        passwordTester.type = "text";
    }
    else{
        passwordTester.type = "password";
    }
}

let passwordStrengths = document.querySelectorAll('.password-strength');
let text = document.getElementById('text');

passwordInput.addEventListener('input', function(event) {
    let password = event.target.value;
    let strength = Math.min(password.length, 12);
    let degree = strength * 30; // calculate degree value based on password strength
    let gradientColor = strength <= 4 ? '#ff2c1c' : (strength <= 8 ? '#ff9800' : '#12ff12');

    passwordStrengths.forEach(passwordStrenght => {
        passwordStrenght.style.background = `conic-gradient(${gradientColor} ${degree}deg, white ${degree}deg)`;
    });
});


setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);
