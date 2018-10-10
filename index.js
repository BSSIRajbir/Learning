var http = require('http');

const PORT = 8080;

function requestHandler(req, res){
res.end('Hello ${process.plateform}');
  console.log('Request to the Handler is completed');
}

var server = http.createServer(requestHandler);

server.listen(PORT, function(){
console.log('${process.env.NODE_ENV} server listening on port: ${PORT}, CTRL-C to exit.');
});
