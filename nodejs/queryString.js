const http = require("http");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(JSON.stringify(query));

});

server.listen(port, ()=> {
    console.log("Running: http://localhost:" + port);
});