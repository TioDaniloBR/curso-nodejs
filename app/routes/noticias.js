// var dbConnection = require('../../config/db_connection');

module.exports = function(app){

    app.get('/noticias',function(req, res){

        var connection = app.config.db_connection();
        var noticiasDAO = new app.app.models.NoticiasDAO(connection);

        noticiasDAO.getNoticias(function(erro, resultado){
            res.render("noticias/noticias", {noticias:resultado});
        });
        
    });
}