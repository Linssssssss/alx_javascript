// 3-form-submission.js

// Function to handle the form submission
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the form field values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Initialize an error message variable
  var errorMessage = "";

  // Validate the "name" field
  if (name.trim() === "") {
    errorMessage += "Please fill in the Name field.\n";
  }

  // Validate the "email" field using a simple regex pattern
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    errorMessage += "Please enter a valid email address.\n";
  }

  // Display error message or success message
  var errorElement = document.getElementById("error");
  if (errorMessage === "") {
    // Success: Display success message and submit the form (or perform further actions)
    errorElement.style.color = "green";
    errorElement.innerHTML = "Form submitted successfully!";
    // You can submit the form here if needed:
    // event.target.submit();
  } else {
    // Error: Display the error message
    errorElement.style.color = "red";
    errorElement.innerHTML = errorMessage;
  }
}

// Add an event listener to the form element to listen for the "submit" event
var submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", handleFormSubmit);
