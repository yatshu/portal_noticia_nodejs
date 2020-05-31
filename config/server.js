var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); 

var app = express(); //executando a função que ta no express(inicia
app.set('view engine', 'ejs');//dessa formao express vai gerar a view com ejs
app.set('views','./app/views');

app.use(express.static('./app/public'));//onde contem os arquivos staticos, consegue acessar tudo que esta no public sem informar o caminho todao, como se estivesse na raiz
//passa para urlencoded para a tratativa, vai tratar como json
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());
//no consign eu incluo as rotas e atribuo ao app
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;