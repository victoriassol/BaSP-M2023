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

function validateName(){
    var errors = [];
    var reg = /^(?!\s+$)[a-zA-Z\u00C0-\u017F\s]+$/;
    if (firstName.value =='' || firstName.value ==null){
        allErrors.push('Name cannot be empty')
        errorMsg.push('Name cannot be empty')
        return false
    }
    if (!reg.test(firstName.value)){
        allErrors.push('Name must contain letters only')
        errors.push('Name must contain letters only')
    }
    if (firstName.value.length<3){
        allErrors.push('Name must be longer than 3 letters')
        errors.push('Name must be longer than 3 letters')
    }    
    if (errors.length>0){
        errorMsg.push(errors)
        return false
    }
    else{
        return true
    };
};
function validateLName(){
    var errors = [];
    var reg = /^(?!\s+$)[a-zA-Z\u00C0-\u017F\s]+$/;
    if (lastName.value =='' || lastName.value ==null){
        allErrors.push('Last name cannot be empty')
        errorMsg.push('Last name cannot be empty')
        return false
    }
    if (!reg.test(lastName.value)){
        allErrors.push('Last name must contain letters only')
        errors.push('Last name must contain letters only')
    }
    if (lastName.value.length<3){
        allErrors.push('Last name must be longer than 3 letters')
        errors.push('Last name must be longer than 3 letters')
    }    
    if (errors.length>0){
        errorMsg.push(errors)
        return false
    }
    else{
        return true
    };
}
function validateDNI(){
    var reg = /^\d{8,}$/;
    if (dni.value =='' || dni.value ==null){
        allErrors.push('DNI cannot be empty')
        errorMsg.push('DNI cannot be empty')
        return false
    }
    if (!reg.test(dni.value)){
        allErrors.push('DNI must contain numbers only and be longer than 7 characters')
        errorMsg.push('DNI must contain numbers only and be longer than 7 characters')
        return false
    }
    else{
        return true
    };
}
function validateDOB(){
    if (dob.value =='' || dob.value ==null){
        allErrors.push('Date of birth cannot be empty')
        errorMsg.push('Date of birth cannot be empty')
        return false
    }
    else{
        return true
    }
}
function validateNumber(){
    var reg = /^\d{10}$/;
    if (number.value =='' || number.value ==null){
        allErrors.push('Phone number cannot be empty')
        errorMsg.push('Phone number cannot be empty')
        return false
    }
    if (!reg.test(number.value)){
        allErrors.push('Phone number must contain 10 digits only')
        errorMsg.push('Phone number must contain 10 digits only')
        return false
    }
    else{
        return true
    };
};
function validateAddress(){
    var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}\s[a-zA-Z\d]{1,}$/;
    if (address.value == '' || address.value == null){
        allErrors.push('Address cannot be empty')
        errorMsg.push('Address cannot be empty')
        return false
    }
    if (!reg.test(address.value)){
        allErrors.push('Address must have "Street number" format')
        errorMsg.push('Address must have "Street number" format')
        return false
    }
    else{
        return true
    };
};
function validateCity(){
    var reg = /^[a-zA-Z\d\s]+$/;
    var reg2 = /\b\w*[a-zA-Z]\w*[a-zA-Z]\w*[a-zA-Z]\w*\b/;
    var errors = [];
    if (city.value == '' || city.value == null){
        allErrors.push('City cannot be empty')
        errorMsg.push('City cannot be empty')
        return false
    }
    if (!reg.test(city.value)){
        allErrors.push('City must contain letters or numbers only')
        errors.push('City must contain letters or numbers only')
    }
    if (!reg2.test(city.value)){
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
    var reg = /^\d{4,5}$/;
    if (zip.value =='' || zip.value ==null){
        allErrors.push('Zip code cannot be empty')
        errorMsg.push('Zip code cannot be empty')
        return false
    }
    if (!reg.test(zip.value)){
        allErrors.push('Zip code must contain 4 to 5 digits only')
        errorMsg.push('Zip code must contain 4 to 5 digits only')
        return false
    }
    else{
        return true
    };
};
function validateEmail(){
    var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    var reg = /^(?=.*[A-Z]).+$/;
    var reg2 = /^(?=.*[a-z]).+$/;
    var reg3 = /^(?=.*\d).+$/;
    var reg4 = /^(?=.*[!@#$%^&*()_+=[{\]};:<>|./?,-]).+$/;
    var reg5 = /^.{8,}$/;
    var errors = [];
    if (password.value == '' || password.value == null){
        allErrors.push('Password cannot be empty')
        errorMsg.push('Password cannot be empty')
        return false
    }
    if (!reg.test(password.value)){
        allErrors.push('At least 1 uppercase letter')
        errors.push('At least 1 uppercase letter')
    }
    if (!reg2.test(password.value)){
        allErrors.push('At least 1 lowercase letter')
        errors.push('At least 1 lowercase letter')
    }
    if (!reg3.test(password.value)){
        allErrors.push('At least 1 digit')
        errors.push('At least 1 digit')
    }
    if (!reg4.test(password.value)){
        allErrors.push('At least 1 special character')
        errors.push('At least 1 special character')
    }
    if (!reg5.test(password.value)){
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
    inputs[j].addEventListener("blur", (e)=>{
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