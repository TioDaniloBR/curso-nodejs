var http = require('http');

var server = http.createServer(function (req, res){

    var categoria = req.url;

    if(categoria == "/tecnologia"){
        res.end("<html><body>Portal de Noticias Tecnologicas</html></body>");
    }else if(categoria == "/moda"){
        res.end("<html><body>Portal de noticias de moda</html></body>");
    }else if (categoria == "/beleza"){
        res.end("<html><body>Portal de noticias de beleza</html></body>");
    }else{
        res.end("<html><body>Portal de noticias </html></body>");
    }
    
});

server.listen(3000);