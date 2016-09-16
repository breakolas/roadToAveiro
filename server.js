/**
 * That's a nice website made by Bruno.
 * Try nr 1
 * Created by Break on 30/08/2016.

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
//var port =  Number(process.env.PORT || 3000);

var contentTypes = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'ico'  : 'image/x-icon',
    'png'  : 'image/png',
    'svg'  : 'image/svg+xml',
    'js'   : 'application/javascript',
    'otf'  : 'application/x-font-otf',
    'ttf'  : 'application/x-font-ttf',
    'eot'  : 'application/vnd.ms-fontobject',
    'woff' : 'application/x-font-woff',
    'woff2': 'application/font-woff2',
    'zip'  : 'application/zip'
}


http.createServer(function (pedido, resposta) {
    //sempre que for feito um pedido é executado este código

    var caminho = url.parse(pedido.url).pathname;

    if (caminho==='/')
    {
        var ficheiro = path.join(__dirname, 'public', caminho, 'index.html');
    }
    else
    {
        var ficheiro = path.join(__dirname, 'public', caminho);
    }

    fs.readFile(ficheiro, function (erro,dados)
    {
        if(erro)
        {
            resposta.writeHead(404);
            resposta.end();
        }
        else
        {
            resposta.end(dados);
        }

    });

}).listen(80, 'localhost', function() {
   console.log('Server Up');
});*/

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
