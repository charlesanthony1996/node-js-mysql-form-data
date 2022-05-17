var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root', 
  port: 3306,     // Replace with your database username
  password: '',      // Replace with your database password
  database: 'node-data' // // Replace with your database Name
}); 

//node -data is the db
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;