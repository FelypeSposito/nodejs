var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('teste.html', function(err1, data) {
    // (EM CIMA) LÊ O CONTEÚDO DENTRO DE UMA PAGINA, POR EXEMPLO O teste.html
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  //MUDA O CONTEUDO DE UM ARQUIVO
  fs.writeFile('teste.html', '<!DOCTYPE html> \n <html lang="en"> \n <head> \n <meta charset="UTF-8"> \n <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <title>Document</title> \n </head> \n <body> \n <h1>Página criada com Write</h1> \n <p>Deu Certo usando apenas tags dentro de strings!<p\> \n </body> \n</html>', function (err2) {
    if (err2) throw err2;
  });
  // CRIA UM ARQUIVO
  fs.appendFile('mynewfile1.txt', ' Esse é meu texto', function (err3) {
    if (err3) throw err3;
  });

  //DELETA ARQUIVOS
  // fs.unlink('deletado2.txt', function (err4) {
  //   if (err4) throw err4;
  //   console.log('Arquivo Deletado!');
  // });
  fs.rename('mynewfile1.txt', 'arquivoRenomeado.txt', function(){
    console.log('Tudo certo até aqui!');
  })
}).listen(8080);

