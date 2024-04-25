const http = require("http");
const url = require("url");
const file = require("fs");
const port = 5000;

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname;

    file.readFile(fileName, function(error, data){
        if(error){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 File Not Found!");
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(port);