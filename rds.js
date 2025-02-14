var mysql = require('mysql');


 
var rdsUrl = 'hotel-app-database.cjftouxk1nuo.ap-southeast-1.rds.amazonaws.com';
var password =  'rovte5-cahmAz-ceprac';
var user = 'admin';
// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
