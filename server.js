let cors = require('cors');


let express = require('express');
bodyParser = require('body-parser');

app = express();

port = process.env.PORT || 3001;
let api = require('./routes/routes');
// app.use(allowCrossDomain);
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);
app.listen(port);
console.log('RESTful API server started on: ' + port);
