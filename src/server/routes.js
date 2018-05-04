import express from 'express';
import mysql from 'mysql';
import { setup } from './setup';

const router = express.Router();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root1234',
    database : 'KM2 Project'
  })

setup(connection);

router.post("/user", function(req, res) {
    const body = req.body;

    connection.query("INSERT INTO Users (Role, Username, TempPassword, Name) VALUES ?",
    [[[body.Role, body.Username, body.TempPassword, body.Name]]], function (error, results) {
        if (error) throw error;
    });

    res.send(body);
});

router.get("/getUsers", function(req, res) {
    connection.query('SELECT * from Users', function (err, rows, fields) {
        if (err) throw err

        res.send(rows);
    });
});

export default router;