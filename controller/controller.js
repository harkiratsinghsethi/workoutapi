const fs = require('fs');

const mysql = require('mysql');


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'remotemysql.com',
    user: 'knBlMynuHC',
    password: 'lwYFEwQrKd',
    database: 'knBlMynuHC'
});
// pool.getConnection((err, connection) => {
//     if (err) throw err; // not connected!
//
//     // Use the connection
//     connection.query('SELECT * FROM seller_details', function (error, results, fields) {
//         console.log(results);
//         // When done with the connection, release it.
//         connection.release();
//
//         // Handle error after the release.
//         if (error) throw error;
//
//         // Don't use the connection here, it has been returned to the pool.
//     });
// });

module.exports = {
    getExcercise: (req, res) => {
        const rawdata = fs.readFileSync('data/exercise.json');
        res.status(200).send(JSON.parse(rawdata));
    },
    getSellerDetails: (req, res) => {
        const sql = 'SELECT * FROM seller_details';
        console.log(pool);
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log(result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
    },
    getAvailableAppointments: (req, res) => {
        const sellerId = req.query.seller_id;

        const sql = `select * from seller_appointment where seller_id = ${sellerId} AND Is_Available ='YES'`;
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log(result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
    },
    bookAppointmentSlot: (req, res) => {
        const sellerId = req.query.seller_id;
        const startTime = req.query.start_time;
        const endTime = req.query.end_time;

        console.log('book appointment');
        const sql = `UPDATE seller_appointment SET Is_Available = 'NO' where seller_slot_start_time = '${startTime}' AND seller_slot_end_time='${endTime}' AND seller_id = ${sellerId}`;
        console.log(sql)
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log('*', result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
    },
    getAppointmentRequests: (req, res) => {
        const sellerId = req.query.seller_id;
        const sql = `select * from seller_appointment where Is_available ='NO' AND is_confirmed ='NO' AND seller_id =${sellerId}`;
        console.log(sql);
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log('*', result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
    },
    rejectRequest: (req, res) => {
        const startTime = req.query.start_time;
        const endTime = req.query.end_time;
        const sellerId = req.query.seller_id;
        const sql = `UPDATE seller_appointment SET Is_Available = 'YES' where seller_slot_start_time = '${startTime}' AND seller_slot_end_time='${endTime}' AND seller_id = ${sellerId}`;
        console.log(sql)
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log('*', result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
    },
    acceptRequest: (req, res) => {
        const startTime = req.query.start_time;
        const endTime = req.query.end_time;
        const sellerId = req.query.seller_id;
        const sql = `UPDATE seller_appointment SET Is_Available = 'NO',is_confirmed='YES' where seller_slot_start_time = '${startTime}' AND seller_slot_end_time='${endTime}' AND seller_id = ${sellerId}`;
        console.log(sql);
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log('*', result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                console.log(result);
                res.send(result);
            });
        });
    },
    showTimeSlot: (req, res) => {
        const sellerId = req.query.seller_id;
        const sql = `select seller_slot_start_time,seller_slot_end_time from seller_appointment where seller_id=${sellerId}`;
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log('*', result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
    },
    findSellerID: (req, res) => {
        const sellerId = req.query.seller_id;

        const sql = `select seller_id from seller_details where seller_id=${sellerId}`;
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(sql, (err1, result) => {
                console.log('*', result);

                connection.release();
                if (err) {
                    console.log('##');

                    throw err1;
                }
                res.send(result);
            });
        });
    }
};


