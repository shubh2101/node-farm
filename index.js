const fs = require("fs");

// synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// // writing file
// const textOut = `This is what we all came for : ${textIn} .\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

// Asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2} \n${data3}`, "utf-8", (err) => {
        console.log("file has been written");
      });
    });
  });
});
console.log("will read file");