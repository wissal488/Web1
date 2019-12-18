var http=require('http');
var url=require('http://localhost:8080/default.html?year=2020&prenom=omarFala&nom=WissalAjbabdi');
var querystring=require('querystring');
var server=http.createServer(function(req, res){
    var params=querystring.parse(url.parse(req.url).query);
    res.writeHead(200,{"Content-Type":"text/plain"});
    if('prenom' in params && 'nom' in params){
        res.write('Vous vous appelez'+params['prenom'] + ' '+ params['nom']);
    }
    else{
        res.write('il manque des parametres!!');
    }
    res.end();
});
server.listen(600);