import express from 'express';
import sql from 'mssql';
import mysql from 'mysql';
import bodyParser from 'body-parser';

import { setup } from './setup';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root1234',
    database : 'KM2 Project'
  });
  
  connection.connect(function(err) {
    if (err) throw err;

    setup(connection);
    app.listen(5000);
    console.log('Connected...');
  });

// routes (get, post, etc) -> put into separate file
app.post("/user", function(req, res) {
    const body = req.body;

    connection.query("INSERT INTO Users (Role, Username, TempPassword, Name) VALUES ?",
    [[[body.Role, body.Username, body.TempPassword, body.Name]]], function (error, results) {
        if (error) throw error;
    });

    res.send(body);
});

app.get("/getUsers", function(req, res) {
    connection.query('SELECT * from Users', function (err, rows, fields) {
        if (err) throw err

        res.send(rows);
    });
});

process.on('exit', function () {
    console.log('About to exit.');
    connection.end();
});