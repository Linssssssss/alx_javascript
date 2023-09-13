#!/usr/bin/node
const request = require("request");

const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  const info = JSON.parse(body);
  let count = 0;
  for (const film of info.results) {
    for (const character of film.characters) {
      if (character.includes("18")) {
        count++;
      }
    }
  }
  console.log(count);
});
