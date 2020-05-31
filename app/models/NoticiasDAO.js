function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias =  function(callback){
    this._connection.query('SELECT * FROM noticias order by data_noticia desc', callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia,callback){
    this._connection.query('SELECT * FROM noticias where id =  ' + id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia,  callback){
        
    const text = 'INSERT INTO noticias(titulo, noticia, resumo, autor , data_noticia) VALUES($1, $2,$3, $4,$5) RETURNING *'
    const values = [noticia.titulo, noticia.noticia, noticia.resumo, noticia.autor, noticia.data_noticia]
    this._connection.query(text,values, callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias order by data_noticia desc limit 5',callback);
};

module.exports = function() {
    return NoticiasDAO;
};