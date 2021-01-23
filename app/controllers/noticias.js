module.exports.noticia = function(app, req, res){
    var connection = app.config.db_connection();
    var noticiasDAO = new app.app.models.NoticiasDAO(connection);

    noticiasDAO.getNoticia(function(error, resultado){
        res.render("noticias/noticia",{noticia:resultado});
    });
}

module.exports.noticias = function(app, req, res){
    var connection = app.config.db_connection();
    var noticiasDAO = new app.app.models.NoticiasDAO(connection);

    noticiasDAO.getNoticias(function(erro, resultado){
        res.render("noticias/noticias", {noticias:resultado});
    });
}