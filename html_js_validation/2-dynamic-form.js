// 2-dynamic-form.js

// Function to generate input fields based on the selected value
function generateInputFields() {
  // Retrieve the selected value from the dropdown
  var numFields = parseInt(document.getElementById("numFields").value);

  // Get the inputContainer div where input fields will be added
  var inputContainer = document.getElementById("inputContainer");

  // Clear any previously generated input fields
  inputContainer.innerHTML = "";

  // Generate and append the specified number of input fields
  for (var i = 1; i <= numFields; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.name = "field" + i;
    input.placeholder = "Field " + i;
    inputContainer.appendChild(input);
  }
}

// Attach the generateInputFields function to the dropdown's change event
var numFieldsDropdown = document.getElementById("numFields");
numFieldsDropdown.addEventListener("change", generateInputFields);

// Function to validate the form before submission
function validateForm(event) {
  // Retrieve the dynamically generated input fields
  var inputFields = document.querySelectorAll("#inputContainer input");

  // Check if any field is empty
  for (var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === "") {
      // Display an error message
      alert("Please fill in all fields.");
      event.preventDefault(); // Prevent form submission
      return;
    }
  }
}

// Attach the validateForm function to the form's submit event
var dynamicForm = document.getElementById("dynamicForm");
dynamicForm.addEventListener("submit", validateForm);
