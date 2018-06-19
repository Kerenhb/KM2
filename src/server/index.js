import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import routes from './routes';

const app = express();

// Set up express database connection
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'shhh...', saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);
app.listen(5000);

console.log('Server: Connected and listening on port 5000 ...');

process.on('exit', function () {
    console.log('About to exit');
    db.end();
});