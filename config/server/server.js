var staticServ = require('node-static');
var fileServer = new staticServ.Server('./dist');
var port = 9527;

require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    fileServer.serve(request, response);
  }).resume();
}).listen(port, function() {
  console.log('Running on localhost:' + port);
});
