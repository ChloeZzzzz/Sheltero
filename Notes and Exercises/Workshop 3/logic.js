fs = require('fs');

function loadHTML(res){
    fs.readFile('./index.html', null, (err, data) => {
        if(err){
            res.writeHead(404);
            res.write("Server Error");
        }
        else{
            res.write(data)
        }
        res.end();
    })
}

function handleReq(req, res){
    res.writeHead(200, {'Content-type':'text-plain'});
    loadHTML(res);
    
}

module.exports = {
    handleRequest: handleReq
};