var email = document.getElementById('email');
var password = document.getElementById('password');

var errorMsg = [];
var errorDiv = document.getElementsByClassName('errorDiv')

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

email.addEventListener("blur", (e)=>{
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
});