const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const tokenVerify = require("./verifyToken/token");
var bodyParser = require('body-parser')
const task = require('./scheduledTasks/cron');

const app = express()

app.use(cors());

// app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

const businessRouter = require('./routes/businessRouter');
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);
app.use('/business',  businessRouter);
// app.use('/business', tokenVerify.verifyToken, businessRouter);

///connect to DB

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.MONGO_URI, connectionParams)
.then(()=> {
    console.log('connected to atlas');
    app.listen(process.env.PORT, ()=> {
        console.log("OK");
    })
})
.catch((err)=>{console.log(err);})