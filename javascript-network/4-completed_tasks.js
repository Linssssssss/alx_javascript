const request = require("request");

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make a GET request to the specified API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    // Parse the JSON response
    const todos = JSON.parse(body);

    // Initialize an object to store the count of completed tasks for each user ID
    const completedTasksByUser = {};

    // Filter and count completed tasks
    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    // Print the count of completed tasks for each user ID
    console.log(completedTasksByUser);
  }
});
