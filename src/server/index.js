var express = require('express');
var sql = require("mssql");
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root1234',
    database : 'express'
  });
  
  connection.connect()
  
  connection.query('SELECT * from user', function (err, rows, fields) {
    if (err) throw err
  
    console.log('The users are: ', rows)
  });

// routes (get, post, etc) -> put into separate file
app.post("/user", function(req, res) {
    const body = req.body;

    connection.query("INSERT INTO user (username, password, firstname, lastname) VALUES ?",
     [[[body.uname, body.pwd, body.fname, body.lname]]], function (error, results) {
        if (error) throw error;
    });

    res.send(body);
});

process.on('exit', function () {
    console.log('About to exit.');
    connection.end()
});