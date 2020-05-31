module.exports.index = function(app,req,res){

    var connection = app.config.dbConnection();
    connection.connect();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(err,result){
        res.render("home/index", {noticias : result.rows});
    });

    
} 