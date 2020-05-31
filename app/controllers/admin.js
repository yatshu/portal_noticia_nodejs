module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render('admin/form_add_noticia', {validacao:{}, noticia: {} }); 
}
 
module.exports.noticias_salvar = function(app,req,res){
    var noticia = req.body;//pegando como json
        //Valida o formulario recebendo
        req.assert('titulo','Titulo é obrigatorio').notEmpty();
        req.assert('resumo','Resumo é obrigatorio').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 a 100 caracteres').len(10,100);
        req.assert('autor','Autor é obrigatorio').notEmpty();
        req.assert('data_noticia','Data é obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Noticia é obrigatorio').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            console.log(noticia);
            res.render('admin/form_add_noticia', {validacao : erros, noticia:noticia}); 
            return;
        }

        //Salvar Noticia
        var connection = app.config.dbConnection();
        connection.connect();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, (err, result) => {
            res.redirect("/noticias");
        });

        //controller
}