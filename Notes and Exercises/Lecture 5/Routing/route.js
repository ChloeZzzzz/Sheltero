var url = require('url');
var fs = require('fs');

function loadHTML(filename, res){
    fs.readFile(filename, null, (err, data)=>{
        if (err){
            res.writeHead(404);
            res.write("Page not Found");
        }
        else{
            res.write(data)
        }
        res.end();
    })
}

function handleReq(req, res){
    res.writeHead(200, {'Content-type' : 'text-plain'});
    var path = url.parse(req.url).pathname;
    var filename = 'null'
    switch (path){
        case('/'):
            filename ='./index.html';
            break;
        case('/login'):
            filename = './login.html';
            break;
    }
    loadHTML(filename, res);

}

module.exports={
    handleRequest: handleReq
};