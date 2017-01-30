
var fs = require('fs');

exports.utils_file_save = function (name, buf) {
    fs.writeFile(name, buf, 'utf8', function (error) {
        if (null != error)
            console.log(error);
        else
            console.log('utils_file_save success');
    });
};