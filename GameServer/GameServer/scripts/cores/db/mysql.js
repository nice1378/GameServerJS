//http://bcho.tistory.com/892
//http://devlecture.tistory.com/entry/05-express-nodejs-%ED%99%98%EA%B2%BD%EC%97%90-mysql-%EC%97%B0%EB%8F%99-Webstorm-%EC%82%AC%EC%9A%A9

var mysql = require('mysql');

exports.core_db_mysql_create = function (host_, port_, user_, password_, database_) {
    var connection = mysql.createConnection({
        host : host_,
        port : port_,
        user : user_,
        password : password_,
        database: database_
    });

    connection.connect(function (err) {
        if (err) {
            console.error('mysql connection error');
            console.error(err);
            throw err;
        }

        console.log('core_db_mysql_create open');
    });

    return client;
};

exports.core_db_mysql_query = function (connection, query) {
    var query = connection.query(query, function (err, result) {
        if (err) {
            console.error(err);
            throw err;
        }

        console.log(query);
    });
};

exports.core_db_mysql_t_query = function (connection, query) {
    connection.beginTransaction(function (err) {
        if (err) {
            throw err;
        }

        connection.query(query, function (err, result) {
            if (err) {
                console.error(err);
                connection.rollback(function () {
                    console.error('rollback error');
                    throw err;
                });
            }
            connection.commit(function (err) {
                if (err) {
                    console.error(err);
                    connection.rollback(function () {
                        console.error('rollback error');
                        throw err;
                    });
                }// if err

                console.log(query);
            });// commit
        });
    });
};