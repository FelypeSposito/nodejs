var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('teste.html', function(err, data) {
    // (EM CIMA) LÊ O CONTEÚDO DENTRO DE UMA PAGINA, POR EXEMPLO O teste.html
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  //MUDA O CONTEUDO DE UM ARQUIVO
  fs.writeFile('teste.html', 'texto base', function (err) {
    if (err) throw err;
    console.log('Salvo!');
  });
  // CRIA UM ARQUIVO
  fs.appendFile('mynewfile1.txt', ' Esse é meu texto', function (err) {
    if (err) throw err;
    console.log('Atualizou!');
  });

  //DELETA ARQUIVOS
  fs.unlink('deletado2.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo Deletado!');
  });
}).listen(8080);

