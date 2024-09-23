let http = require("http");
let url = require("url");

let server = http.createServer(function(req, res){

    let parsedUrl = url.parse(req.url,true);
    let pathName = parsedUrl.pathname;
    let query = parsedUrl.query;

    let a = parseInt(query.a);
    let b = parseInt(query.b);
    
    let x;
    switch(pathName){
        case "/add":
            x = a+b;
            break;
        case "/sub":
            x = a-b;
            break;
        case "/multiply":
            x = a*b;
            break;
        case "/div":
            x= a/b;
            break;
    }
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(x.toString());
});

server.listen(3000,function(){
    console.log("running");
})