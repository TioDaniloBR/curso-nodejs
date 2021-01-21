var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexão com bd foi criada.');
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'portal_noticias'
    });
}
module.exports = function(){
    console.log('O autoload carregou o modulo.')
    return connMysql;
}