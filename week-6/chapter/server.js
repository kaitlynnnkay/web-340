"use strict";
const http = require("http");
const server = http.createServer((req, res,) =>
    { res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Learning Node.js is fun!");
    });
server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000/");
});