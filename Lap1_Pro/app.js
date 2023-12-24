const fs = require("fs");

const text = " Hi there, it's 10:00 now!";

fs.appendFile("text.txt", text, (err) => {
  if (err) {
    console.err;
    return;
  }
});

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.err;
    return;
  }
  console.log(data);
});
