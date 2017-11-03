var express = require('express');
var socket = require('socket.io');


var app = express();

server = app.listen(8080, function(){
  console.log('server is up and running on 8080')
});

var io = socket(server);

io.on('connection', function(socket){
  console.log(socket.id);
});
