module.exports.noticias = function(app,req,res){
     //usei o app por conta que eu ja tinha incluido no consign
     var connection = app.config.dbConnection();
     connection.connect();
     var noticiasModel = new app.app.models.NoticiasDAO(connection);

     noticiasModel.getNoticias( (err, result) => {
         res.render("noticias/noticias", {noticias : result.rows});
     });
     
} 

module.exports.noticia = function(app,req,res){
    //usei o app por conta que eu ja tinha incluido no consign
    var connection = app.config.dbConnection();
    connection.connect();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    //console.log(req.query.id_noticia);
    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, (err, result) => {
       res.render("noticias/noticia", {noticia : result.rows});
    });
}