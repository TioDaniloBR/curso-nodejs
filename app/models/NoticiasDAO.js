function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    // um debug para ver o que está indo para o bd console.log(noticia);
    this._connection.query("INSERT INTO noticias SET ?", noticia, callback);
}


module.exports = function(){

    return NoticiasDAO;
}