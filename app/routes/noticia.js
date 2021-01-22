module.exports = function(app){
    app.get('/noticia',function(req, res){

        var connection = app.config.db_connection();
        var noticiasDAO = new app.app.models.NoticiasDAO(connection);

        noticiasDAO.getNoticia(function(error, resultado){
            res.render("noticias/noticia",{noticia:resultado});
        });
    });
}