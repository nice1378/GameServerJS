var redis = require('redis');

exports.core_db_redis_create = function (url, port) {
    return redis.createClient(url, port);
};

exports.core_db_redis_get = function (db, key) {
    db.get(key, function (error, result) {
        if (error)
            return null;
        else
            return result;
    });
};

exports.core_db_redis_set = function (db, key, data) {
    db.set(key, data, function (error, result) {
        if (error)
            return null;
        else
            return result;
    });
};

