var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("send");
var inputs = [email, password];
var validations = [validateEmail, validatePassword];
var errorMsg = [];
var allErrors = [];
var errorDiv = document.getElementsByClassName("errorDiv");
var modal = document.getElementsByClassName("modal-background")[0];
var modalP = document.getElementsByClassName("modal-p")[0];
var modalTitle = document.getElementsByClassName("modal-h3")[0];
var modalOk = document.getElementsByClassName("modal-ok")[0];

//Validations//
function validateEmail() {
  var reg = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (email.value == "" || email.value == null) {
    errorMsg.push("Email address cannot be empty");
    return false;
  }
  if (!reg.test(email.value)) {
    errorMsg.push("Email must have a valid format");
    return false;
  } else {
    return true;
  }
}
function validatePassword() {
  var errors = [];
  function hasNumber(str) {
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        return true;
      }
    }
  }
  function hasLetter(str) {
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      ) {
        return true;
      }
    }
  }
  if (password.value == "" || password.value == null) {
    allErrors.push("Password cannot be empty");
    errorMsg.push("Password cannot be empty");
    return false;
  }
  if (!hasLetter(password.value)) {
    allErrors.push("At least 1 letter");
    errors.push("At least 1 letter");
  }
  if (!hasNumber(password.value)) {
    allErrors.push("At least 1 digit");
    errors.push("At least 1 digit");
  }
  if (password.value.length < 8) {
    allErrors.push("At least 8 characters");
    errors.push("At least 8 characters");
  }
  if (errors.length > 0) {
    allErrors.push("Password must contain: ", ...errors);
    errorMsg.push("Password must contain: ", ...errors);
    return false;
  } else {
    return true;
  }
}

// Handle errors //
function handleError(e, errDiv) {
  e.target.style = "border: red 1px solid";
  for (var i = 0; i < errorMsg.length; i++) {
    errorDiv[
      errDiv
    ].innerHTML += `<li style="list-style: none">${errorMsg[i]}</li>`;
  }
}

//Blur events//
for (let j = 0; j < inputs.length; j++) {
  inputs[j].addEventListener("blur", (e) => {
    if (!validations[j]()) {
      handleError(e, j);
    }
  });
}

//Focus events//
for (let j = 0; j < inputs.length; j++) {
  inputs[j].addEventListener("focus", (e) => {
    errorMsg = [];
    e.target.style = "border: gray 1px solid";
    errorDiv[j].textContent = "";
  });
}
send.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    errorDiv[i].innerHTML = "";
  }
  let values = [];
  let inputValues = {};
  let isEmpty = false;
  for (let i = 0; i < inputs.length; i++) {
    values.push(inputs[i].value);
    inputValues[inputs[i].name] = values[i];
    if (inputValues[inputs[i].name] == "") {
      isEmpty = true;
      inputs[i].style = "border: red 1px solid";
      errorDiv[i].innerHTML += `Field cannot be empty`;
    }
  }
  var allTrue = validations.every((val) => val());
  if (allTrue) {
    let inputValues = [];
    for (let i = 0; i < inputs.length; i++) {
      inputValues.push(inputs[i].name + ": " + inputs[i].value);
    }
    fetch(
      `https://api-rest-server.vercel.app/login?email=${email.value}&password=${password.value}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (!json.success) {
          if (json.errors !== undefined) {
            if (json.errors.length > 0) {
              var resErrors = "";
              for (let i = 0; i < json.errors.length; i++) {
                resErrors += ` ${json.errors[i].msg}`;
              }
              throw new Error("Ups! " + resErrors);
            }
          }
          throw new Error("Ups! " + json.msg);
        } else {
          modalTitle.innerHTML = "Login successful";
          modalP.innerHTML = json.msg + " " + inputValues;
          modal.style.display = "block";
          modalOk.style.backgroundColor = "#AACE9B";
          modalOk.style.color = "#373867";
          modalTitle.style.color = "#49A37B";
        }
      })
      .catch((err) => {
        modal.style.display = "block";
        modalP.innerHTML = err + " " + inputValues;
      });
  }
});

//Close modal//
modalOk.addEventListener("click", () => {
  modal.style.display = "none";
});
