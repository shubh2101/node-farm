const fs = require("fs");
const http = require("http");
const url = require("url");

// synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// // writing file
// const textOut = `This is what we all came for : ${textIn} .\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

// Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2} \n${data3}`, "utf-8", (err) => {
//         console.log("file has been written");
//       });
//     });
//   });
// });
// console.log("will read file");

// creating server
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW");
  } else if (pathName === "/products") {
    res.end("This is PRODUCTS");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello my friend",
    });
    res.end("<h1> Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the requests on port 8000");
});
