const mysql = require('mysql');
const dbConnection = mysql.createPool({
    host     : 'localhost', 
    user     : 'root', 
    password : 'password', 
    database : 'login' 
});
module.exports = dbConnection;