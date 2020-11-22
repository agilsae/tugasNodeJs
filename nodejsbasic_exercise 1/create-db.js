var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
});

var sqlCreateDb = "CREATE DATABASE ecommerse CHARACTER SET latin1 COLLATE latin1_swedish_ci";

connection.connect(function(err){
    if (err) {
        throw err;
    }

    console.log('Terkoneksi dengan sukses!');
    connection.query(sqlCreateDb, function(err, result){
        if (err){
            throw err;
        }
        console.log('Database berhasil dibuat');
        connection.destroy();
    });
});

