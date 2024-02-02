const express = require('express');
const cron = require('node-cron');
const cors = require('cors');
const path = require('path');

//----------------Utils----------------//
const updateStocks = require('./utils/updateStocks');

//----------------Controllers----------------//
const getData = require('./controllers/getData');

//-------------------APP-------------------//
const app = express();

app.use('/home',express.static(path.join(__dirname + '/public')));
app.use(express.json());
app.use(cors());

//-------------------ROUTES-------------------//
app.get('/data', getData);

app.use((req,res) => {
    res.status(404).send(`<h1>Error 404: Resource not found</h1>`);
})

//-------------------------END-------------------------//

//-------------------------JOB-------------------------//
cron.schedule('* * * * *', updateStocks);

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});