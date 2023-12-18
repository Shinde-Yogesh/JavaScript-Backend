
// import the package using require 
// and write operation on message.txt file 
// first parameter is file name
// second parameter is operation on the file
// third one is the error
const fs = require("fs");
fs.writeFile("message.txt","week people create strong time",(er)=>
{
    if(er) throw er;
    console.log("The text has been created")
})
