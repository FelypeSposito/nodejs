var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

console.log("Olá, Node.js!");
console.log("Ctrl + C para o codigo do node!");

