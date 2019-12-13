// const mongo = require('mongodb').MongoClient
// const url = "mongodb+srv://harkirat:manak003@tazweed-md3ka.mongodb.net/test?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, {useNewUrlParser: true});
//
// mongo.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, (err, client) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log('connected')
// })
//

const db_connector = require('./database_connector');
db_connector.getPool();

