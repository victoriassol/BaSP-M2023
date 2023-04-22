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

var errorMsg = [];
var errorDiv = document.getElementsByClassName('errorDiv')

function validateName(name){
    var errors = [];
    var reg = /^(?!\s+$)[a-zA-Z\u00C0-\u017F\s]+$/;
    if (name.value =='' || name.value ==null){
        errorMsg.push('Cannot be empty')
        return false
    }
    if (!reg.test(name.value)){
        errors.push('Must contain letters only')
    }
    if (name.value.length<3){
        errors.push('Must be longer than 3 letters')
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
        errorMsg.push('Cannot be empty')
        return false
    }
    if (!reg.test(dni.value)){
        errorMsg.push('Must contain numbers only and be longer than 7 characters')
        return false
    }
    else{
        return true
    };
}
function validateNumber(){
    var reg = /^\d{10}$/;
    if (number.value =='' || number.value ==null){
        errorMsg.push('Phone number cannot be empty')
        return false
    }
    if (!reg.test(number.value)){
        errorMsg.push('Must contain 10 digits only')
        return false
    }
    else{
        return true
    };
};
function validateAddress(){
    var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}\s[a-zA-Z\d]{1,}$/;
    if (address.value == '' || address.value == null){
        errorMsg.push('Address cannot be empty')
        return false
    }
    if (!reg.test(address.value)){
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
        errorMsg.push('City cannot be empty')
        return false
    }
    if (!reg.test(city.value)){
        errors.push('City must contain letters or numbers only')
    }
    if (!reg2.test(city.value)){
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
        errorMsg.push('Zip code cannot be empty')
        return false
    }
    if (!reg.test(zip.value)){
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
        errorMsg.push('Email address cannot be empty')
        return false
    }
    if (!reg.test(email.value)){
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
        errorMsg.push('password cannot be empty')
        return false
    }
    if (!reg.test(password.value)){
        errors.push('At least 1 uppercase letter')
    }
    if (!reg2.test(password.value)){
        errors.push('At least 1 lowercase letter')
    }
    if (!reg3.test(password.value)){
        errors.push('At least 1 digit')
    }
    if (!reg4.test(password.value)){
        errors.push('At least 1 special character')
    }
    if (!reg5.test(password.value)){
        errors.push('At least 8 characters')
    }
    if (errors.length>0){
        errorMsg.push('Password must contain: ', errors)
        return false
    }
    else{
        return true
    };
};
function validateRepPassword(){
    if (repPassword.value !== password.value){
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
        errorDiv[errDiv].innerHTML += errorMsg[i]
    }
};

//Blur events//
firstName.addEventListener("blur", (e)=>{
    if (!validateName(firstName)){
        handleError(e, 0)
    }
});
lastName.addEventListener("blur", (e)=>{
    if (!validateName(lastName)){
        handleError(e, 1)
    }
});
dni.addEventListener("blur", (e)=>{
    if (!validateDNI()){
        handleError(e, 2)
    }
});
number.addEventListener("blur", (e)=>{
    if (!validateNumber()){
        handleError(e, 4)
    }
});
address.addEventListener("blur", (e)=>{
    if (!validateAddress()){
        handleError(e, 5)
    }
});
city.addEventListener("blur", (e)=>{
    if (!validateCity()){
        handleError(e, 6)
    }
});
zip.addEventListener("blur", (e)=>{
    if (!validateZip()){
        handleError(e, 7)
    }
});
email.addEventListener("blur", (e)=>{
    if (!validateEmail()){
        handleError(e, 8)
    }
});
password.addEventListener("blur", (e)=>{
    if (!validatePassword()){
        handleError(e, 9)
    }
});
repPassword.addEventListener("blur", (e)=>{
    if (!validateRepPassword()){
        handleError(e, 10)
    }
});

//Focus events//
firstName.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[0].textContent = '';
})
lastName.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[1].textContent = '';
})
dni.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[2].textContent = '';
});
number.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[4].textContent = '';
});
address.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[5].textContent = '';
});
city.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[6].textContent = '';
});
zip.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[7].textContent = '';
});
email.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[8].textContent = '';
});
password.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[9].textContent = '';
});
repPassword.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[10].textContent = '';
})