import * as db from '../databaseHandler';
import express from 'express';
const router = express.Router();

const connection = db.get() || db.connect();

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