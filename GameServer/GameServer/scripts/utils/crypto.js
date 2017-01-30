
var crypto = require('crypto');

exports.utils_crypto_hash = function (data) {
    var shasum = crypto.createHash('sha1');
    shasum.update(data);
    var output = shasum.digest('hex');
    
    //console.log(output);
    
    return output;
};

exports.utils_crypto_cipher = function (algorithm, key, input) {
    var cipher = crypto.createCipher(algorithm);
    cipher.update(input, 'utf8', 'base64');
    var output = cipher.final('base64');
    return output;
};

exports.utils_crypto_decipher = function (algorithm, key, input) {
    var decipher = crypto.createDecipher(algorithm);
    decipher.update(input, 'base64', 'utf8');
    var output = decipher.final('utf8');
    return output;
};