// 0-password-strength.js

// Function to validate the password
function validatePassword() {
  // Retrieve the password input field value
  var password = document.getElementById("password").value;

  // Define regular expressions for each validation criteria
  var lengthRegex = /.{8,}/;
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var digitRegex = /[0-9]/;
  var specialCharRegex = /[!@#$%^&*]/;

  // Initialize an error message variable
  var errorMessage = "";

  // Check each validation criteria
  if (!lengthRegex.test(password)) {
    errorMessage += "Password must be at least 8 characters long.<br>";
  }

  if (!uppercaseRegex.test(password)) {
    errorMessage += "Password must contain at least one uppercase letter.<br>";
  }

  if (!lowercaseRegex.test(password)) {
    errorMessage += "Password must contain at least one lowercase letter.<br>";
  }

  if (!digitRegex.test(password)) {
    errorMessage += "Password must contain at least one numeric digit.<br>";
  }

  if (!specialCharRegex.test(password)) {
    errorMessage +=
      "Password must contain at least one special character (!@#$%^&*).<br>";
  }

  // Display the error message if any criteria are not met
  var errorElement = document.getElementById("error");
  errorElement.innerHTML = errorMessage;

  // Prevent form submission if there are errors
  if (errorMessage !== "") {
    event.preventDefault(); // Prevent form submission
  }
}

// Attach the validatePassword function to the form's submit event
var form = document.getElementById("passwordForm");
form.addEventListener("submit", validatePassword);
