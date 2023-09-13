#!/usr/bin/node
const fs = require("fs");
const request = require("request");

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  fs.writeFile(filePath, body, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
});
