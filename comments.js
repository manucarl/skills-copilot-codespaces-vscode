// Create web server
// Create a server that listens on port 3000 and sends a response with a status code of 200 and the message "You're looking at my comments" for any requests made to the root URL '/'

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("You're looking at my comments");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

## 2.5.2. Express.js

- Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- It facilitates the rapid development of Node-based web applications.
- It provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

###