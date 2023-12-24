const fs = require("fs");

const text = " Hi there, it's 10:00 now!";
const filePath = "./app/text.txt";

fs.appendFile(filePath, text, (err) => {
  if (err) {
    console.err;
    return;
  }
});

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.err;
    return;
  }
  console.log(data);
});
