let http = require('http');
let fs = require('fs');

// Create server
let server = http.createServer(function(req, res){
    
// Select page via URL
if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let readStream = fs.createReadStream(__dirname + '/home.html', 'utf8').pipe(res);
} else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let readStream = fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
} else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let readStream = fs.createReadStream(__dirname + '/about.html', 'utf8').pipe(res);
} else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let readStream = fs.createReadStream(__dirname + '/error.html', 'utf8').pipe(res);
}

});

server.listen(3002, '127.0.0.1')
console.log('Server is running on port 3002')