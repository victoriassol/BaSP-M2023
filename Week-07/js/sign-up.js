var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var dni = document.getElementById("dni");
var dob = document.getElementById("dob");
var zip = document.getElementById("zip");
var city = document.getElementById("city");
var number = document.getElementById("number");
var address = document.getElementById("address");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repPassword = document.getElementById("rep-password");
var membership = document.getElementById("membership");
var submit = document.getElementById("send");
var inputs = [
  firstName,
  lastName,
  dni,
  dob,
  number,
  address,
  city,
  zip,
  email,
  password,
  repPassword,
];
var validations = [
  validateName,
  validateLName,
  validateDNI,
  validateDOB,
  validateNumber,
  validateAddress,
  validateCity,
  validateZip,
  validateEmail,
  validatePassword,
  validateRepPassword,
];
var errorMsg = [];
var allErrors = [];
var errorDiv = document.getElementsByClassName("errorDiv");
var modal = document.getElementsByClassName("modal-background")[0];
var modalP = document.getElementsByClassName("modal-p")[0];
var modalTitle = document.getElementsByClassName("modal-h3")[0];
var modalOk = document.getElementsByClassName("modal-ok")[0];

function checkNumbers(str) {
  for (let i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

//Validations//
function validateName() {
  var errors = [];
  function checkLettersAndSpaces(str) {
    for (let i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (
        (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) &&
        charCode !== 32
      ) {
        return false;
      }
    }
    return true;
  }
  if (firstName.value == "" || firstName.value == null) {
    allErrors.push("Name cannot be empty");
    errorMsg.push("Name cannot be empty");
    return false;
  }
  if (!checkLettersAndSpaces(firstName.value)) {
    allErrors.push("Name must contain letters only");
    errors.push("Name must contain letters only");
  }
  if (firstName.value.length < 3) {
    allErrors.push("Name must be longer than 3 letters");
    errors.push("Name must be longer than 3 letters");
  }
  if (errors.length > 0) {
    errorMsg.push(...errors);
    return false;
  } else {
    return true;
  }
}
function validateLName() {
  var errors = [];
  function checkLettersAndSpaces(str) {
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (
        (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) &&
        charCode !== 32
      ) {
        return false;
      }
    }
    return true;
  }
  if (firstName.value == "" || firstName.value == null) {
    allErrors.push("Name cannot be empty");
    errorMsg.push("Name cannot be empty");
    return false;
  }
  if (!checkLettersAndSpaces(firstName.value)) {
    allErrors.push("Name must contain letters only");
    errors.push("Name must contain letters only");
  }
  if (lastName.value.length < 3) {
    allErrors.push("Last name must be longer than 3 letters");
    errors.push("Last name must be longer than 3 letters");
  }
  if (errors.length > 0) {
    errorMsg.push(...errors);
    return false;
  } else {
    return true;
  }
}
function validateDNI() {
  var errors = [];
  if (dni.value == "" || dni.value == null) {
    allErrors.push("DNI cannot be empty");
    errorMsg.push("DNI cannot be empty");
    return false;
  }
  if (!checkNumbers(dni.value)) {
    allErrors.push("DNI must contain numbers only");
    errors.push("DNI must contain numbers only");
  }
  if (dni.value.length !== 8 && dni.value.length !== 7) {
    allErrors.push("DNI must contain 7 or 8 numbers");
    errors.push("DNI must contain 7 or 8 numbers");
  }
  if (errors.length > 0) {
    errorMsg.push(...errors);
    return false;
  } else {
    return true;
  }
}
var dobValue = "";
function validateDOB() {
  var dobSplit = dob.value.split("-");
  var year = dobSplit[0];
  let dobArray = [dobSplit[2], dobSplit[1], dobSplit[0]];
  dobValue = dobArray.join("/");
  if (dob.value == "" || dob.value == null) {
    allErrors.push("Date of birth cannot be empty");
    errorMsg.push("Date of birth cannot be empty");
    return false;
  }
  if (year > 2007) {
    allErrors.push("You must be over 16 to register");
    errorMsg.push("You must be over 16 to register");
    return false;
  } else {
    return true;
  }
}
function validateNumber() {
  var errors = [];
  if (number.value == "" || number.value == null) {
    allErrors.push("Phone number cannot be empty");
    errorMsg.push("Phone number cannot be empty");
    return false;
  }
  if (!checkNumbers(number.value)) {
    allErrors.push("Phone number must contain numbers only");
    errors.push("Phone number must contain numbers only");
  }
  if (number.value.length !== 10) {
    allErrors.push("Phone number must contain 10 digits");
    errors.push("Phone number must contain 10 digits");
  }
  if (errors.length > 0) {
    errorMsg.push(...errors);
    return false;
  } else {
    return true;
  }
}
function validateAddress() {
  var errors = [];
  function checkAddressFormat(str) {
    let letterCount = 0;
    let numberCount = 0;
    let spaceFound = false;

    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (char >= "0" && char <= "9") {
        numberCount++;
      } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        letterCount++;
      } else if (char === " ") {
        spaceFound = true;
      }
    }
    return letterCount >= 3 && numberCount >= 1 && spaceFound;
  }

  if (address.value == "" || address.value == null) {
    allErrors.push("Address cannot be empty");
    errorMsg.push("Address cannot be empty");
    return false;
  }
  if (address.value.length < 4) {
    allErrors.push("Address must be at least 5 characters long");
    errors.push("Address must be at least 5 characters long");
  }
  if (!checkAddressFormat(address.value)) {
    allErrors.push('Address must be in "Street number" format');
    errors.push('Address must be in "Street number" format');
  }
  if (errors.length > 0) {
    errorMsg.push(...errors);
    return false;
  } else {
    return true;
  }
}
function validateCity() {
  var errors = [];
  function checkAlphanumberic(str) {
    let hasLetters = false;
    let hasNumbers = false;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        hasNumbers = true;
      } else if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      ) {
        hasLetters = true;
      }
    }
    return hasLetters || hasNumbers;
  }
  if (city.value == "" || city.value == null) {
    allErrors.push("City cannot be empty");
    errorMsg.push("City cannot be empty");
    return false;
  }
  if (!checkAlphanumberic(city.value)) {
    allErrors.push("City must contain letters or numbers only");
    errors.push("City must contain letters or numbers only");
  }
  if (city.value.length < 3) {
    allErrors.push("City must contain more than 3 letters");
    errors.push("City must contain more than 3 letters");
  }
  if (errors.length > 0) {
    errorMsg.push(errors);
    return false;
  } else {
    return true;
  }
}
function validateZip() {
  var errors = [];
  if (zip.value == "" || zip.value == null) {
    allErrors.push("Zip code cannot be empty");
    errorMsg.push("Zip code cannot be empty");
    return false;
  }
  if (!checkNumbers(zip.value)) {
    allErrors.push("Zip code must contain numbers only");
    errors.push("Zip code must contain numbers only");
  }
  if (zip.value.length !== 4 && zip.value.length !== 5) {
    allErrors.push("Zip code must 4-5 numbers only");
    errors.push("Zip code must 4-5 numbers only");
  }
  if (errors.length > 0) {
    errorMsg.push(...errors);
    return false;
  } else {
    return true;
  }
}
function validateEmail() {
  var reg = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (email.value == "" || email.value == null) {
    allErrors.push("Email address cannot be empty");
    errorMsg.push("Email address cannot be empty");
    return false;
  }
  if (!reg.test(email.value)) {
    allErrors.push("Email must have a valid format");
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
function validateRepPassword() {
  if (password.value == "" || password.value == null) {
    allErrors.push("Password cannot be empty");
    errorMsg.push("Password cannot be empty");
    return false;
  }
  if (repPassword.value !== password.value) {
    allErrors.push("Passwords do not match");
    errorMsg.push("Passwords do not match");
    return false;
  } else {
    return true;
  }
}
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

//Submit//
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
    let url = 'https://api-rest-server.vercel.app/signup?'
    let firstQueries = `name=${firstName.value}&lastName=${lastName.value}&dni=${dni.value}&dob=${dobValue}&phone=${number.value}`;
    let secondQueries = `&address=${address.value}&&city=${city.value}&&zip=${zip.value}&&email=${email.value}&&password=${password.value}`;
    fetch(url+firstQueries+secondQueries)
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
          modalTitle.innerHTML = "Sign up successful";
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

//Autofill form with localStorage information//
window.onload = () => {
  let splitStorageDob = localStorage.dob.split("/");
  let storageDob = [
    splitStorageDob[2],
    splitStorageDob[0],
    splitStorageDob[1],
  ].join("-");
  firstName.value = localStorage.name;
  lastName.value = localStorage.lastName;
  dni.value = localStorage.dni;
  dob.value = storageDob;
  number.value = localStorage.phone;
  address.value = localStorage.address;
  city.value = localStorage.city;
  zip.value = localStorage.zip;
  email.value = localStorage.email;
  password.value = localStorage.password;
  repPassword.value = localStorage.password;
};

//Close modal//
modalOk.addEventListener("click", () => {
    modal.style.display = "none";
  });