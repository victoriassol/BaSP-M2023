var email = document.getElementById('email');
var password = document.getElementById('password');
var submit = document.getElementById('send');
var inputs = [email, password];
var validations = [validateEmail, validatePassword];
var errorMsg = [];
var allErrors = [];
var errorDiv = document.getElementsByClassName('errorDiv');

//Validations//
function validateEmail(){
    var reg = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
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

// Handle errors //
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


