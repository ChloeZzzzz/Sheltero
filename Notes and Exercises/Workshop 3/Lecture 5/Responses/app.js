var http = require('http');
var fs = require('fs');

function onRequest(req, res){
    var filename = "./index.html"
    res.writeHead(200, {'Content-type': 'text-plain'});
    fs.readFile(filename, null, (err, data) => {
        if (err){
            res.writeHead(404);
            res.write("Page not found!");
        }
        else{
            res.write(data);
        }
        res.end();
    });
}

http.createServer(onRequest).listen(3000)