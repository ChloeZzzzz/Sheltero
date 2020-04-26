var http = require('http');
var faker = require('faker');

const nums=10

function onRequest(req, res){
    res.writeHead(200, {'Content-type': 'text-plain'});
    res.write("wut up");
    res.end();
}

console.log ("Server is on!")

function get_Emails(){
    for (let i=0; i<nums; i++){
        console.log(faker.internet.email())
    }
}

http.createServer(onRequest).listen(3000);
get_Emails();