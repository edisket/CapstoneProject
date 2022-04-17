const express = require('express');
const app = express();
const router = require('./src/services/RouterService');
const cors = require('cors');


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// app.use(cors(corsOptions));

app.use(express.json());
app.use('/', cors(corsOptions) , router);
app.listen(3000, ()=>{
    console.log(`Listening to port 3000`);
})