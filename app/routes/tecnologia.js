module.exports = function(app){
    app.get('/tecnologia',function(req, res){
        app.app.controllers.tecnologia.tecnologia(app, req, res);
    });
}