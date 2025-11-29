const http = require('http');
const url = require('url');

let character = null; // variable to store created character

// TODO: Implement your server here
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // store the parsed URL
  const pathname = parsedUrl.pathname; // store the pathname (/create, /confirm, or /view)
  const query = parsedUrl.query // store the query parameters 

  // TODO: Implement your routes here
  // POST route for creating a character
  if (pathname === "/create" && req.method === "POST") {
    const { class: charClass, gender, funFact } = query; // get values from query string

    // store the created character
    character = { class: charClass, gender, funFact };

    res.writeHead(201, { "Content-Type": "application/json" }); // send 201 reponse and set content-type header to JSON
    res.end(JSON.stringify(character)); // sends character object as a JSON string
  }

  if (pathname === "/confirm" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" }); // send 200 response and set content-type header to JSON
    res.end(JSON.stringify({ message: "Character successfully created" })); // send confirmation message as a JSON string
  }

  if (pathname === "/view" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" }); // send 200 response and set content-type header to JSON
    res.end(JSON.stringify(character)); // sends created character
  }
});

server.listen(3000, "localhost", () => {
  console.log('Server listening on port 3000');


});

module.exports = server;