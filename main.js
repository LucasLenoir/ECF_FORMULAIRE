"use-strict";
// import "./style.css";
const email = document.getElementById("email");
let submit = document.getElementById("submit");
let form = document.getElementById("form");

function validateEmail() {
  console.log(email.value);
  if (email.value.match(/[a-z0-9]+@[a-z]+.[a-z]{2,3}/)) {
    return true;
  } else {
    return false;
  }
}

function validateForm() {
  let name = document.getElementById("name");
  let number = document.getElementById("number");
  let message = document.getElementById("message");
  let subject = document.getElementById("subject");

  if (name.value == "" || name.lenght < 3) {
    alert("Please enter your name, 3 characters min");
    return false;
  }
  if (number.value == "") {
    alert("Please enter your number");
    return false;
  }
  if (message.value == "" || message.lenght < 12) {
    alert("Please enter your message, 12 characters min");
    return false;
  }
  if (subject.value == "") {
    alert("Please enter the subject");
    return false;
  }

  alert("All datas are valid!, send it to the server!");

  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail() || !validateForm()) {
    return false;
  } else {
    let formdata = new FormData(form);
    fetch("email.php", {
      method: "POST",
      body: formdata,
    }).then(() => {
      let success = document.getElementById("success");
      success.classList.add("active");
    });
  }
});
