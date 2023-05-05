// Get all the input elements
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const phoneNumber = document.getElementById("phone-number");

// Regular expressions for validation
const fullNameRegex = /^[a-zA-Z ]{2,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const phoneNumberRegex = /^\d{10}$/;

// Function to add or remove CSS classes based on validation status
function handleValidationStatus(inputElement, isValid) {
  if (isValid) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}

// Function to handle changes to the input fields
function handleInputChange(event) {
  const inputElement = event.target;
  const inputValue = inputElement.value.trim();

  // Check if the input value is empty
  if (inputValue === "") {
    inputElement.classList.remove("valid", "invalid");
    inputElement.classList.add("empty");
    return;
  }

  // Validate the input value
  let isValid = false;
  switch (inputElement.id) {
    case "full-name":
      isValid = fullNameRegex.test(inputValue);
      break;
    case "email":
      isValid = emailRegex.test(inputValue);
      break;
    case "password":
      isValid = passwordRegex.test(inputValue);
      break;
    case "confirm-password":
      isValid = password.value === inputValue;
      break;
    case "phone-number":
      isValid = phoneNumberRegex.test(inputValue);
      break;
    default:
      break;
  }

  // Update the validation status of the input field
  handleValidationStatus(inputElement, isValid);
}

// Add event listeners to the input fields
fullName.addEventListener("input", handleInputChange);
email.addEventListener("input", handleInputChange);
password.addEventListener("input", handleInputChange);
confirmPassword.addEventListener("input", handleInputChange);
phoneNumber.addEventListener("input", handleInputChange);

// Function to validate the form on submit
function validateForm(event) {
  event.preventDefault();

  const isFullNameValid = fullNameRegex.test(fullName.value.trim());
  const isEmailValid = emailRegex.test(email.value.trim());
  const isPasswordValid = passwordRegex.test(password.value.trim());
  const isConfirmPasswordValid = password.value === confirmPassword.value;
  const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber.value.trim());

  handleValidationStatus(fullName, isFullNameValid);
  handleValidationStatus(email, isEmailValid);
  handleValidationStatus(password, isPasswordValid);
  handleValidationStatus(confirmPassword, isConfirmPasswordValid);
  handleValidationStatus(phoneNumber, isPhoneNumberValid);

  // Check if all input fields are valid
  if (isFullNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneNumberValid) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors in the form before submitting.");
  }
}

// Add event listener to the form submit button
const form = document.getElementById("registration-form");
form.addEventListener("submit", validateForm);
