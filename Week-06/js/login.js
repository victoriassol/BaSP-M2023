var email = document.getElementById('email');
var password = document.getElementById('password');
var submit = document.getElementById('send');
var inputs = [email, password];
var validations = [validateEmail, validatePassword];
var errorMsg = [];
var allErrors = [];
var errorDiv = document.getElementsByClassName('errorDiv');

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

/*email.addEventListener("blur", (e)=>{
    if (!validateEmail()){
        handleError(e, 0)
    }
});
password.addEventListener("blur", (e)=>{
    if (!validatePassword()){
        handleError(e, 1)
    }
});

email.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[0].textContent = '';
});
password.addEventListener('focus', (e)=>{
    errorMsg = [];
    e.target.style = 'border: gray 1px solid';
    errorDiv[1].textContent = '';
});*/