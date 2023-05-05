var form = document.getElementById("myForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var nameRegex = /^[a-zA-Zñ\d\s]{1,50}$/;
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passwordRegex = /^.{8,}$/;

form.addEventListener("submit", function(event) {
  if (!nameRegex.test(nameInput.value)) {
    nameInput.classList.add("invalid");
    event.preventDefault();
  } else {
    nameInput.classList.remove("invalid");
  }

  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("invalid");
    event.preventDefault();
  } else {
    emailInput.classList.remove("invalid");
  }

  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.classList.add("invalid");
    event.preventDefault();
  } else {
    passwordInput.classList.remove("invalid");
  }
});

nameInput.addEventListener("blur", function() {
  if (!nameRegex.test(nameInput.value)) {
    nameInput.classList.add("invalid");
  } else {
    nameInput.classList.remove("invalid");
  }
});

emailInput.addEventListener("blur", function() {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
  }
});

passwordInput.addEventListener("blur", function() {
  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.classList.add("invalid");
  } else {
    passwordInput.classList.remove("invalid");
  }
});
