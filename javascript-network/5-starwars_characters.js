const request = require("request");

// Get the movie ID from the command line argument
const movieID = process.argv[2];

// Construct the URL for the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

// Make a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    // Parse the JSON response
    const movieData = JSON.parse(body);

    // Print the character names for the movie
    console.log(movieData.characters.join("\n"));
  }
});
