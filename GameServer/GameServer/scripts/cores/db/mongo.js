var mongoDB = require('mongodb');
var mongoClient = mongoDB.MongoClient;
var mongoServer = mongoDB.ReplSetServers;

exports.core_db_mongo_create = function (url, port, option, dbName) {
    var client = new mongoClient(new mongoServer(url, port, option));
    client.db(dbName);
    client.Open(function (err, client) {
        if (err) throw err;

        console.log('core_db_mongo_create open');
    });
    return client;
};

//db.collection('users').insert([{ city: 'suji' }, { city: 'busan' }], function (err, doc)
exports.core_db_mongo_insert = function (db, collectionName, key, data) {
    db.collection(collectionName).insert(key, data, function (err, doc) {
        if (err) throw err;


    });
};

//db.collection('users').update({ _id: 'terry' }, { $set: { 'sex': 'male' } }, function (err, doc)
exports.core_db_mongo_remove = function (db, collectionName, key) {
    db.collection(collectionName).remove(key, function (err, doc) {
        if (err) throw err;

    });
};

//db.collection('users').update({ _id: 'terry' }, { 'sex': 'male' }, function (err, doc) {
exports.core_db_mongo_update = function (db, collectionName, key, data) {
    db.collection(collectionName).update(key, data, function (err, doc) {
        if (err) throw err;

    });
};

//db.collection('users').find({ city: 'suji' }).toArray(function (err, docs) {
//    if (err) throw err;
//    res.send(docs);
//    for (i = 0; i < docs.length; i++) {
//        console.log(docs[i].city);
//    }
//});
exports.core_db_mongo_find = function (db, collectionName, key) {
    db.collection(collectionName).find(key).toArray(function (err, doc) {
        if (err) throw err;

        for (i = 0; i < docs.length; i++) {
            console.log(docs[i].city);
        }
    });
};