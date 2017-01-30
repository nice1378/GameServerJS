
//var http = require('http');
var socketio = require('socketio');
var sesstion = require('./session.js');

exports.core_socketio_server_create = function (httpServer, funcListen) {
    
    //var server = http.createServer(app, funcCreate);
    
    //server.on('requset', session.core_session_request);
    //server.on('connection', session.core_session_connection);
    //server.on('close', session.core_session_close);
    //server.on('checkContinue', session.core_session_checkContinue);
    //server.on('upgrade', session.core_session_upgrade);
    //server.on('clientError', session.core_session_clientError);
    
    var io = socketio.listen(httpServer, funcListen);
    io.set('log level', 2);
    io.sockets.on('connection', sesstion.core_socketio_session_connection);
    io.sockets.on('disconnect', sesstion.core_socketio_session_disconnect);
};

exports.core_socketio_server_sendPublic = function (io, funcName, data) {
    io.sockets.emit(funcName, data);
}

exports.core_socketio_server_sendBroadcast = function (socket, funcName, data) {
    socket.broadcast.emit(funcName, data);
}

exports.core_socketio_server_sendPrivate = function (io, id, funcName, data) {
    io.sockets.sockets[id].emit(funcName, data);
}