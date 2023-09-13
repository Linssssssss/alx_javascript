#!/usr/bin/node
const request = require("request");

const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  const user = {};
  for (const task of JSON.parse(body)) {
    if (task.completed) {
      if (user[task.userId]) {
        user[task.userId]++;
      } else {
        user[task.userId] = 1;
      }
    }
  }
  console.log(user);
});
