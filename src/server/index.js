import express from 'express';
import sql from 'mssql';
import mysql from 'mysql';
import bodyParser from 'body-parser';

import  UserRoutes from './routes/UserRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(5000);

// routes
app.use('/', UserRoutes);

process.on('exit', function () {
    console.log('About to exit');
    db.end();
});