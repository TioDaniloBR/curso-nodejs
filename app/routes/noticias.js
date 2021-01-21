// var dbConnection = require('../../config/db_connection');

module.exports = function(app){

    app.get('/noticias',function(req, res){

        var connection = app.config.db_connection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection,function(erro, resultado){
            res.render("noticias/noticias", {noticias:resultado});
        });

        

    });
}