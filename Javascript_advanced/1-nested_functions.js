// Define the global variable
var globalVariable = "Welcome";

// Define the outer function
function outer() {
  // Alert the content of the globalVariable
  alert(globalVariable);

  // Create a variable named 'course' with value 'Holberton'
  var course = "Holberton";

  // Define the inner function
  function inner() {
    // Alert the content of globalVariable and course (concatenated)
    alert(globalVariable + " " + course);

    // Create a variable named 'exclamation' with value '!'
    var exclamation = "!";

    // Define the inception function
    function inception() {
      // Alert the content of globalVariable, course, and exclamation (concatenated)
      alert(globalVariable + " " + course + exclamation);
    }

    // Call the inception function
    inception();
  }

  // Call the inner function
  inner();
}

// Call the outer function
outer();
