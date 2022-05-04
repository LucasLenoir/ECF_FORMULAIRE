"use-strict";
// import "./style.css";
const email = document.getElementById("email");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let errors = document.querySelector("h3");
let regSpec = /Ü-Ü/;
let error = false;

function validateEmail() {
  let errorEmail = document.querySelector("#errorEmail");
  console.log(email.value);
  if (email.value.match(/[a-z0-9]+@[a-z]+.[a-z]{2,3}/)) {
    return true;
  } else {
    errorEmail.textContent = "mail format incorect";
    return false;
  }
}
function validateForm() {
  let name = document.getElementById("name");
  let number = document.getElementById("number");
  let message = document.getElementById("message");
  let subject = document.getElementById("subject");
  let errorName = document.querySelector("#errorName");
  let errorNumber = document.querySelector("#errorNumber");
  let errorMessage = document.querySelector("#errorMessage");
  let errorSubject = document.querySelector("#errorSubject");
  console.log(name.value);
  let errorContent = "";
  let error = false;

  validateName();
  validateNumber();

  if (message.value.length < 12) {
    errorMessage.textContent = " 12 signs min";
    error = true;
  }
  if (subject.value.length < 3) {
    errorSubject.textContent = "3 signs min";
    error = true;
  }

  return !error;
}
function validateName() {
  let name = document.getElementById("name");
  let errorName = document.querySelector("#errorName");
  let errorContent = [];
  if (!name.value.match(/[a-zA-Z]{3,}/)) {
    errorContent.push("3 letters min");
    error = true;
  }

  if (name.value.match(/[^a-zA-Z0-9]/)) {
    errorContent.push("no special signs");
    console.log("yoyo");
    error = true;
  }
  errorName.textContent = errorContent.join(",");
}
function validateNumber() {
  let number = document.getElementById("number");
  let errorNumber = document.querySelector("#errorNumber");
  let errorContent = [];
  if (!number.value.match(/[0-9]{3,}/)) {
    errorContent.push("3 digits min");
    error = true;
  }

  if (number.value.match(/Ü-Ü/)) {
    errorContent.push("no special signs");
    error = true;
  }
  errorNumber.textContent = errorContent.join(",");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  if (!validateEmail() || !validateForm()) {
    return false;
  } else {
    let formdata = new FormData(form);
    fetch("./php/email.php", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => {
        let success = document.getElementById("succestext");

        console.log(success);
        if ((res = true)) {
          document.getElementById("form").reset();
          success.textContent = "Success, thanks for reaching out";
        } else {
          success.textContent = "Failed, form hasen't reached us";
        }
      });
  }
});
