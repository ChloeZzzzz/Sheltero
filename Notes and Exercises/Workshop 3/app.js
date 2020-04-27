const http = require('http');
const logic = require('./logic');

http.createServer(logic.handleRequest).listen(3000)