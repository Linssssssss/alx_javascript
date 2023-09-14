function welcomeMessage(fullName) {
  return function () {
    alert("Welcome " + fullName);
  };
}

// Create three variables with different arguments
var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");

// Test the variables by calling them
guillaume(); // This will display "Welcome Guillaume"
alex(); // This will display "Welcome Alex"
fred(); // This will display "Welcome Fred"
