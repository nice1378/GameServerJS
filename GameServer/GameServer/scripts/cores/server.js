
var http = require('http');
var session = require('./session');

exports.core_server_create = function (app, port, funcCreate, funcListen) {
    
    var server = http.createServer(app, funcCreate);
    
    server.on('requset', session.core_session_request);
    server.on('connection', session.core_session_connection);
    server.on('close', session.core_session_close);
    server.on('checkContinue', session.core_session_checkContinue);
    server.on('upgrade', session.core_session_upgrade);
    server.on('clientError', session.core_session_clientError);
    
    server.listen(port, funcListen);
};