module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia",{validacao:{},noticia:{}});
}

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;

        //validação com express validator
        req.assert('titulo','O Título é um campo obrigatório').notEmpty();
        req.assert('resumo','O campo resumo é obrigatório').notEmpty();
        req.assert('resumo','O campo resumo deveconter entre 10 e 100 caracteres.').len(10,100);
        req.assert('autor','O campo autor é obrigatório').notEmpty();
        req.assert('data_noticia','O campo data é obrigatório').isDate({format:'YYYY-MM-DD'});
        req.assert('noticia','O campo notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            console.log(noticia);
            res.render("admin/form_add_noticia", {validacao: erros, noticia:noticia});
            return;
        }

        //recuperar conexao
        var connection = app.config.db_connection();

        //recuperar model
        var noticiasDAO = new app.app.models.NoticiasDAO(connection);

        //salvar noticia
        noticiasDAO.salvarNoticia(noticia,function(erro, resultado){
            res.redirect("/noticias");
        });

        //callback para tela que lista noticia para saber se foi adicionada corretamente
}