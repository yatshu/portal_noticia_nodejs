var app = require('./config/server');

//fazendo a parte do Consign eu nao rpeciso atribuir as rotas manualmente
// var rotaNoticias = require('./app/routes/noticias');
// var rotaHome = require('./app/routes/home');
// var rotaFormulario = require('./app/routes/formulario_inclusao_noticia');
// rotaNoticias(app);
// rotaHome(app);
// rotaFormulario(app);

app.listen(3000,function(){
    console.log('servidor rodando localhost:3000');
});