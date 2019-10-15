const fs = require('fs');

module.exports = {
    getExcercise: (req, res) => {
        const rawdata = fs.readFileSync('data/exercise.json');
        res.status(200).send(JSON.parse(rawdata));
    }
};

