var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var dni = document.getElementById('dni');
var dob = document.getElementById('dob');
var zip = document.getElementById('zip');
var city = document.getElementById('city');
var number = document.getElementById('number');
var address = document.getElementById('address');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repPassword = document.getElementById('rep-password');
var membership = document.getElementById('membership');
var submit = document.getElementById('send');
var inputs = [firstName, lastName, dni, dob, number, address, city, zip, email, password, repPassword]
var validations = [validateName, validateLName, validateDNI, validateDOB, validateNumber, validateAddress, validateCity, validateZip, validateEmail, validatePassword, validateRepPassword]
var errorMsg = [];
var allErrors = [];
var errorDiv = document.getElementsByClassName('errorDiv')
function checkNumbers(str){
    for (let i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode < 48 || charCode > 57) {
        return false;
      }
    }
    return true;
};

//Validations//
function validateName(){
    var errors = [];
    function checkLettersAndSpaces(str) {
        for (let i = 0; i < str.length; i++) {
          var charCode = str.charCodeAt(i);
          if ((charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) && charCode !== 32) {
            return false;
          }
        }
        return true;
      }
    if (firstName.value == '' || firstName.value == null){
        allErrors.push('Name cannot be empty')
        errorMsg.push('Name cannot be empty')
        return false
    }
    if (!checkLettersAndSpaces(firstName.value)){
        allErrors.push('Name must contain letters only')
        errors.push('Name must contain letters only')
    }
    if (firstName.value.length<3){
        allErrors.push('Name must be longer than 3 letters')
        errors.push('Name must be longer than 3 letters')
    }
    if (errors.length>0){
        errorMsg.push(...errors)
        return false
    }
    else{
        return true
    };
};
function validateLName(){
    var errors = [];
    function checkLettersAndSpaces(str){
        for (let i = 0; i < str.length; i++) {
          const charCode = str.charCodeAt(i);
          if ((charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) && charCode !== 32) {
            return false;
          }
        }
        return true;
      }
    if (firstName.value == '' || firstName.value == null){
        allErrors.push('Name cannot be empty')
        errorMsg.push('Name cannot be empty')
        return false
    }
    if (!checkLettersAndSpaces(firstName.value)){
        allErrors.push('Name must contain letters only')
        errors.push('Name must contain letters only')
    }
    if (lastName.value.length<3){
        allErrors.push('Last name must be longer than 3 letters')
        errors.push('Last name must be longer than 3 letters')
    }
    if (errors.length>0){
        errorMsg.push(...errors)
        return false
    }
    else{
        return true
    };
}
function validateDNI(){
    var errors = [];
    if (dni.value =='' || dni.value ==null){
        allErrors.push('DNI cannot be empty')
        errorMsg.push('DNI cannot be empty')
        return false
    }
    if (!checkNumbers(dni.value)){
        allErrors.push('DNI must contain numbers only')
        errors.push('DNI must contain numbers only')
    }
    if (dni.value.length < 8){
        allErrors.push('DNI must contain more than 7 numbers')
        errors.push('DNI must contain more than 7 numbers')
    }
    if (errors.length>0){
        errorMsg.push(...errors)
        return false
    }
    else{
        return true
    };
}

function validateDOB(){
    console.log(dob.value)
    var dobSplit = dob.value.split('-')
    var year = dobSplit[0];
    var dobArray = [dobSplit[2], dobSplit[1], dobSplit[0]];
    var arrangedDob = JSON.stringify(dobArray);
    console.log(arrangedDob);

    if (dob.value == '' || dob.value == null){
        allErrors.push('Date of birth cannot be empty')
        errorMsg.push('Date of birth cannot be empty')
        return false
    }
    if (year > 2007){
        allErrors.push('You must be over 16 to register')
        errorMsg.push('You must be over 16 to register')
        return false
    }
    else{
        return true
    }
}
function validateNumber(){
    var errors = [];
    if (number.value == '' || number.value == null){
        allErrors.push('Phone number cannot be empty')
        errorMsg.push('Phone number cannot be empty')
        return false
    }
    if (!checkNumbers(number.value)){
        allErrors.push('Phone number must contain numbers only')
        errors.push('Phone number must contain numbers only')
    }
    if (number.value.length !== 10){
        allErrors.push('Phone number must contain 10 digits')
        errors.push('Phone number must contain 10 digits')
    }
    if (errors.length>0){
        errorMsg.push(...errors)
        return false
    }
    else{
        return true
    };
};
function validateAddress(){
    var errors = [];
    function checkAddressFormat(str) {
        let hasLetters = false;
        let hasNumbers = false;
        let hasSpace = false;
        for (let i = 0; i < str.length; i++) {
          const charCode = str.charCodeAt(i);
          if (charCode >= 48 && charCode <= 57) {
            hasNumbers = true;
          } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasLetters = true;
          } else if (charCode === 32) {
            hasSpace = true;
          }
        }
        return hasLetters && hasNumbers && hasSpace;
    }
    if (address.value == '' || address.value == null){
        allErrors.push('Address cannot be empty')
        errorMsg.push('Address cannot be empty')
        return false
    }
    if (address.value.length < 4){
        allErrors.push('Address must be at least 5 characters long')
        errors.push('Address must be at least 5 characters long')
    }
    if(!checkAddressFormat(address.value)){
        allErrors.push('Address must be in "Street number" format')
        errors.push('Address must be in "Street number" format')
    }
    if (errors.length>0){
        errors.push(...errors)
        return false
    }
    else{
        return true
    };
};
function validateCity(){
    var errors = [];
    function checkAlphanumberic(str) {
        let hasLetters = false;
        let hasNumbers = false;
        for (let i = 0; i < str.length; i++) {
          const charCode = str.charCodeAt(i);
          if (charCode >= 48 && charCode <= 57) {
            hasNumbers = true;
          }
          else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasLetters = true;
        }
        }
        return hasLetters || hasNumbers;
    }
    if (city.value == '' || city.value == null){
        allErrors.push('City cannot be empty')
        errorMsg.push('City cannot be empty')
        return false
    }
    if (!checkAlphanumberic(city.value)){
        allErrors.push('City must contain letters or numbers only')
        errors.push('City must contain letters or numbers only')
    }
    if (city.value.length<3){
        allErrors.push('City must contain more than 3 letters')
        errors.push('City must contain more than 3 letters')
    }
    if (errors.length>0){
        errorMsg.push(errors)
        return false
    }
    else{
        return true
    };
};
function validateZip(){
    var errors = [];
    console.log(zip.value.length)
    console.log(4)
    if (zip.value =='' || zip.value ==null){
        allErrors.push('Zip code cannot be empty')
        errorMsg.push('Zip code cannot be empty')
        return false
    }
    if (!checkNumbers(zip.value)){
        allErrors.push('Zip code must contain numbers only')
        errors.push('Zip code must contain numbers only')
    }
    if (zip.value.length !== 4 && zip.value.length !== 5){
        allErrors.push('Zip code must 4-5 numbers only')
        errors.push('Zip code must 4-5 numbers only')
    }
    if (errors.length>0){
        errorMsg.push(...errors)
        return false
    }
    else{
        return true
    };

};
function validateEmail(){
    var reg =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (email.value =='' || email.value ==null){
        allErrors.push('Email address cannot be empty')
        errorMsg.push('Email address cannot be empty')
        return false
    }
    if (!reg.test(email.value)){
        allErrors.push('Email must have a valid format')
        errorMsg.push('Email must have a valid format')
        return false
    }
    else{
        return true
    };
};
function validatePassword(){
    var errors = [];
    function hasSpecialCharacters(str) {
        for (let i = 0; i < str.length; i++) {
          const charCode = str.charCodeAt(i);
          if ((charCode >= 33 && charCode <= 47) || (charCode >= 58 && charCode <= 64) || (charCode >= 91 && charCode <= 96) || (charCode >= 123 && charCode <= 126)) {
            return true;
          }
        }
        return false;
      }
    function hasNumber(str){
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            if (charCode >= 48 && charCode <= 57) {
              return true;
            }
            else{
                return false
            }
        }
    };
    function hasLetter(str){
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            return true;
          }
        }
    }
    if (password.value == '' || password.value == null){
        allErrors.push('Password cannot be empty')
        errorMsg.push('Password cannot be empty')
        return false
    }
    if (!hasLetter(password.value)){
        allErrors.push('At least 1 letter')
        errors.push('At least 1 letter')
    }
    if (!hasNumber(password.value)){
        allErrors.push('At least 1 digit')
        errors.push('At least 1 digit')
    }
    if (!hasSpecialCharacters(password.value)){
        allErrors.push('At least 1 special character')
        errors.push('At least 1 special character')
    }
    if (password.value.length<8){
        allErrors.push('At least 8 characters')
        errors.push('At least 8 characters')
    }
    if (errors.length>0){
        allErrors.push('Password must contain: ', ...errors)
        errorMsg.push('Password must contain: ', ...errors)
        return false
    }
    else{
        return true
    };
};
function validateRepPassword(){
    if (repPassword.value !== password.value){
        allErrors.push('Passwords do not match')
        errorMsg.push('Passwords do not match')
        return false
    }
    else{
        return true
    }
};
function handleError(e, errDiv){
    e.target.style = 'border: red 1px solid';
    for(var i = 0; i < errorMsg.length; i++){
        errorDiv[errDiv].innerHTML += `<li style="list-style: none">${errorMsg[i]}</li>`
    }
};

//Blur events//
for (let j = 0; j<inputs.length; j++){
    inputs[j].addEventListener('blur', (e)=>{
        if (!validations[j]()){
            handleError(e, j)
        }
    })
}

//Focus events//
for (let j = 0; j<inputs.length; j++){
    inputs[j].addEventListener('focus', (e)=>{
        errorMsg = [];
        e.target.style = 'border: gray 1px solid';
        errorDiv[j].textContent = '';
    })
}

//Submit//
send.addEventListener('click', (e)=>{
    e.preventDefault();
    for (let i = 0; i<inputs.length; i++){
        errorDiv[i].innerHTML = ''
    }
    let values = [];
    let inputValues = {};
    let isEmpty = false;
    for (let i = 0; i<inputs.length; i++){
        values.push(inputs[i].value);
        inputValues[inputs[i].name] = values[i];
        if (inputValues[inputs[i].name] == ''){
            isEmpty = true;
            inputs[i].style = 'border: red 1px solid';
            errorDiv[i].innerHTML += `Field cannot be empty`
        }
    }
    alert(JSON.stringify(inputValues) + allErrors)
})