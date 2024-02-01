const express = require('express');
const cron = require('node-cron');
const cors = require('cors');

//----------------Utils----------------//
const updateStocks = require('./utils/updateStocks');

//----------------Controllers----------------//
const getData = require('./controllers/getData');

//-------------------APP-------------------//
const app = express();

app.use(express.json());
app.use(cors());

//-------------------ROUTES-------------------//
app.get('/data', getData);

//-------------------------END-------------------------//

//-------------------------JOB-------------------------//
cron.schedule('* * * * *', updateStocks);

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});

module.exports = app;