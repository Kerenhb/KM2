import express from 'express';
import mysql from 'mysql';
import { setup } from './setup';
import * as utils from './databaseUtils';

const router = express.Router();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root1234',
    database : 'KM2 Project'
  })

setup(connection);

router.post("/user/:id/test", function(req, res) {
    // TODO: Check user is authorised and add timestamp
    const { id } = req.params;
    const { results } = req.body;

    const found = checkUserId(id);
    if (!found) return res.status(400).send('User not found');

    const sumWeights = results.reduce((acc, cur) => acc + cur);
    if (sumWeights !== 70) return res.status(412).send('Weights must sum to 70');

    connection.query(utils.insertTests(id, results),
        function (err, results) {
            if (err) res.status(500).send(err)
            const testId = results.insertId;
            res.status(200).send({testId : testId});
        });
});

async function checkUserId (id) {
    let found;
    await connection.query(utils.getRow('Users', id), function(err, result) {
        if (result.length) found = true;
        else found = false;
    });

    return found;
};

export default router;