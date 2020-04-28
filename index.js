// filename: index.js

// import express
let express = require("express");

// import bodyParser
let bodyParser = require("body-parser");

// import mongoose
let mongoose = require('mongoose');

// initialize app
let app = express();

// import router
let apiRoutes = require("./api-routes");

// configuration bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/tugas_4_nodejs', { useNewUrlParser: true });

var db = mongoose.connection;

// added check for DB connection
if(!db)
    console.log("error connecting db")
else
    console.log("db connected successfully")

// setup server port
var port = process.env.PORT || 8080;

// send message or default URL
app.get('/', (req, res) => res.send('Selamat Datang Di Data Center Siswa Indonesia'));

// app routes
app.use('/api', apiRoutes);

// launch app to listen specified PORT
app.listen(port, function () {
    console.log("Running App on Port " + port);
})
