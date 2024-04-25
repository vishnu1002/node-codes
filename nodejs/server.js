const http = require('http');
const file = require('fs');
const port = 5000;

const server = http.createServer(function (req, res)
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  file.readFile('index.html', function(error, data)
  {
    if(error){
        res.writeHead(404);
        console.log("File Not Found!");
    }
    else{
        res.write(data);
    }
    res.end();
  });
});

server.listen(port, function(error){
    if(error){
        console.log("Port not configured!");
    }
    else{
        console.log("Running: http://localhost:" + port);
    }
});

