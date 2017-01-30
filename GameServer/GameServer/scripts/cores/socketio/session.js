
exports.core_socketio_session_connection = function (socket) {
    console.log('core_socketio_session_connection');
}

exports.core_socketio_session_disconnect = function (socket) {
    console.log('core_socketio_session_disconnect');
}

exports.core_socketio_session_joinRoom = function (socket, roomnumber) {
    socket.join(roomnumber);
    socket.set('room', roomnumber);
}