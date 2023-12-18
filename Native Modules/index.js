// import the package using require
// and write operation on message.txt file
// first parameter is file name
// second parameter is operation on the file
// third one is the error
const fs = require("fs");

// fs.writeFile("message.txt", "week people create strong time", (er) => {
//   if (er) throw er;
//   console.log("The text has been created");
// });

// for the read the file
// if encoding is not menstioned then return following result
//<Buffer 77 65 65 6b 20 70 65 6f 70 6c 65 20 63 72 65 61 74 65 20 73 74 72 6f 6e 67 20 74 69 6d 65>
/*fs.readFile("./message.txt", (er, data) => {
  if (er) throw er;
  console.log(data);
});*/


fs.readFile("./message.txt","utf8",(er, data) => {
  if (er) throw er;
  console.log(data);
});
