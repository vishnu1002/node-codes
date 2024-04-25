const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  
  fs.readdir(__dirname, (err, files) => {
    if (err) return res.end('Error reading directory');

    
    let fileListHTML = '<ul>';
    
    files.forEach((file) => {
      fileListHTML += `<li>${file}</li>`;
    });
    
    fileListHTML += '</ul>';

    
    res.end(fileListHTML);
  });
});

const port = 3000
server.listen(port, () => {
  console.log(`Running: http://localhost:${port}/`);
});
