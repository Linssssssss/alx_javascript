const request = require("request");
const fs = require("fs");

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    // Write the response body to the specified file with UTF-8 encoding
    fs.writeFileSync(filePath, body, "utf-8");
    console.log(`Contents of the webpage have been saved to ${filePath}`);
  }
});
