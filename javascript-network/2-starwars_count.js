const request = require("request");

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Make a GET request to the films endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    // Parse the JSON response
    const filmsData = JSON.parse(body);

    // Initialize a count variable to keep track of the number of films
    let filmCount = 0;

    // Loop through the films and check if Wedge Antilles is present
    filmsData.results.forEach((film) => {
      if (
        film.characters.includes(
          `https://swapi-api.alx-tools.com/api/people/${characterId}/`
        )
      ) {
        filmCount++;
      }
    });

    // Print the number of films where Wedge Antilles is present
    console.log(filmCount);
  }
});
