var app = require('./config/server');

// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaNoticia = require('./app/routes/noticia');
// var rotatecnologia = require('./app/routes/tecnologia');
// var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');



// rotaNoticia(app);
// rotatecnologia(app);
// rotaFormularioInclusaoNoticia(app);

app.listen(3000, function(){
    console.log("Servidor online.");
});