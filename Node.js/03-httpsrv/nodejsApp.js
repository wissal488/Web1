var http=require('http');
var fs=require('fs');
var url=require('url');
var str="rien....";
/*fs.readFile('./public/index.html',(err,data)=>{
    str=data;
    console.log(''+str);
})*/
var server=http.createServer(function(req, res){
    var page=url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{'Content-Type':'text/html'});
    if(page == '/'){
        res.write('Accueil');
    }
    else if(page == '/contact'){
        res.write('Nous contacter');
    }
    else if (page=='/cours/web/nodejs'){
        res.write('Node.js is greate');
    }
    res.write(str);
    res.end();
});
server.listen(300);