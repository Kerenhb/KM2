import mysql from 'mysql';
import { setup } from './setup';

let connection = null;

export function connect(mode, done) {
    connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root1234',
    database : 'KM2 Project'
  })

  connection.connect(function(err) {
    if (err) throw err;

    setup(connection);
    console.log('Connection added');
  });

  return connection;
};

export function get() {
  return connection
};

export function end() {
    connection.end();
};