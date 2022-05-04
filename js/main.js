"use-strict";
// import "./style.css";
const email = document.getElementById("email");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let errors = document.querySelector("h3");

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
  let error = false;
  if (name.value == "" || name.value.length < 3) {
    errorName.textContent = "3 signs min";
    error = true;
  }
  if (number.value == "") {
    errorNumber.textContent = "Please enter your number";
    error = true;
  }
  if (message.value == "" || message.value.length < 12) {
    errorMessage.textContent = " 12 signs min";
    error = true;
  }
  if (subject.value == "") {
    errorSubject.textContent = "Please enter the subject";
    error = true;
  }

  return !error;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
