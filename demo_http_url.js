
//NODEJS
var http = require('http');


//JAVASCRIPT: let x = 'frase aleatoria para começar os testes'
// FUNCIONA!

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
//   res.write(x)
  res.end();
}).listen(8080);

//JAVASCRIPT:


