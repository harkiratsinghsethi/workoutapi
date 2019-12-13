// const mysql = require('mysql');
//
// const connection = mysql.createConnection({
//     host: 'remotemysql.com',
//     user: 'knBlMynuHC',
//     password: 'lwYFEwQrKd',
//     database: 'knBlMynuHC'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected!');
// });
//


const mysql = require('mysql');


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'remotemysql.com',
    user: 'knBlMynuHC',
    password: 'lwYFEwQrKd',
    database: 'knBlMynuHC'
});

// return pool;


// return pool.getConnection();
pool.getConnection((err, connection) => {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('SELECT * FROM seller_details', function (error, results, fields) {
        console.log(results);
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
    });
});
