

exports.utils_info_os = function () {
    var os = require('os');
    var util = require('util');
    
    var data = 'utils_info_os' + '\n';
    data += '\n';
    data += 'hostname : ' + os.hostname() + '\n';
    data += 'type : ' + os.type() + '\n';
    data += 'platform : ' + os.platform() + '\n';
    data += 'arch : ' + os.arch() + '\n';
    data += 'release : ' + os.release() + '\n';
    data += 'uptime : ' + os.uptime() + '\n';
    data += 'loadavg : ' + os.loadavg() + '\n';
    data += 'totalmem : ' + os.totalmem() + '\n';
    data += 'freemem : ' + os.freemem() + '\n';
    console.log(data);
    
    var data2 = util.format('%s : %j\n', 'cpus', os.cpus());
    console.log(data2);

    return data + data2;
};