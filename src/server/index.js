import express from 'express';
import bodyParser from 'body-parser';

import  routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.listen(5000);

console.log('Server: Connected and listening on port 5000 ...');

process.on('exit', function () {
    console.log('About to exit');
    db.end();
});