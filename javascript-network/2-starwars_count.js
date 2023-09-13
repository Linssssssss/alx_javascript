const request = require("request");

const url = process.argv[2];

const wedgeId = 18;

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const films = JSON.parse(body);
  let count = 0;

  for (const film of films) {
    const characters = film.characters;

    for (const character of characters) {
      if (character.id === wedgeId) {
        count++;
        break;
      }
    }
  }

  console.log(count);
});
