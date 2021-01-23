function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticia = '+id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    // um debug para ver o que está indo para o bd console.log(noticia);
    this._connection.query("INSERT INTO noticias SET ?", noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query("select * from noticias order by data_criacao desc limit 5", callback);
}


module.exports = function(){

    return NoticiasDAO;
}