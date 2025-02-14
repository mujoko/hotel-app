var mysql = require('mysql');


 
var rdsUrl = 'replace';
var password =  'replace';
var user = 'replace';
// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;


// curl --request POST \
// --url 'https://rts4kqddmh.ap-southeast-1.awsapprunner.com/add?id=1&floor=2&hasView=1' \
// --header 'cache-control: no-cache'