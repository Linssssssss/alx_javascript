// Import the 'request' module
const request = require("request");

// Get the URL from the command line argument
const url = process.argv[2];

// Make a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    // Print the status code
    console.log(`code: ${response.statusCode}`);
  }
});
