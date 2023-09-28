// 1-email-validation.js

// Function to validate the email format
function validateEmail() {
  // Retrieve the email input field value
  var email = document.getElementById("email").value;

  // Define a regular expression for email format validation
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Initialize an error message variable
  var errorMessage = "";

  // Check if the email format is valid
  if (!emailRegex.test(email)) {
    errorMessage = "Please enter a valid email address.";
  }

  // Display the error message if the email format is invalid
  var errorElement = document.getElementById("error");
  errorElement.innerHTML = errorMessage;

  // Prevent form submission if the email format is not valid
  if (errorMessage !== "") {
    event.preventDefault(); // Prevent form submission
  }
}

// Attach the validateEmail function to the form's submit event
var form = document.getElementById("emailForm");
form.addEventListener("submit", validateEmail);
