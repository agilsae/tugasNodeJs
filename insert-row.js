var mysql = require('mysql');

var connectdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecommerse'
})

var sqlInsert = `INSERT INTO product(nama_produk, gambar_produk, harga_produk, des_produk, createdate)
VALUES ('test','test','2000','test','2020-11-1'), ('test2','test2','20002','test2','2020-11-2')`;

connectdb.connect(function(err){
    if (err) {
        throw err;
    }

    console.log('db Terkoneksi dengan sukses!');

    connectdb.query(sqlInsert, function(err, result){
        if (err){
            throw err;
        }
        console.log('Data berhasil disimpan');
        connectdb.destroy();
    });
});


