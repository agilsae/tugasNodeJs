var mysql = require('mysql');

var connectdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecommerse'
})

var sqlCreateTable = `CREATE TABLE product (
    id_product INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(60) NOT NULL,
    gambar_produk VARCHAR(200) NOT NULL,
    harga_produk INT NOT NULL,
    des_produk TEXT NOT NULL,
    createdate DATE NOT NULL
    )`;

connectdb.connect(function(err){
    if (err) {
        throw err;
    }

    console.log('db Terkoneksi dengan sukses!');
    connectdb.query(sqlCreateTable, function(err, result){
        if (err){
            throw err;
        }
        console.log('Table berhasil dibuat');
        connectdb.destroy();
    });

    // connectdb.query(sqlInsert, function(err, result){
    //     if (err){
    //         throw err;
    //     }
    //     console.log('Data berhasil disimpan');
    // });

    // connectdb.destroy();
});


