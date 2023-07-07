const form = document.getElementById('password-form');
const passwordOutput = document.getElementById('password');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const passwordLength = document.getElementById('password-length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(
        passwordLength,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
    );

    passwordOutput.value = password;
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
    let charset = '';
    let password = '';

    if(includeUppercase){
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(includeLowercase){
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(includeNumbers){
        charset+='0123456789';
    }
    if(includeSymbols){
        charset += '!@#$%^&*()';

    }

    for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random()*charset.length);
        password += charset[randomIndex];
    }
    return password;
}