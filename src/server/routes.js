import express from 'express';
import mysql from 'mysql';
import { setup } from './setup';
import * as utils from './databaseUtils';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const LocalStrategyStrategy = LocalStrategy.Strategy;
const router = express.Router();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root1234',
    database : 'KM2 Project'
  })

setup(connection);

// Can move into separate file, see https://gist.github.com/manjeshpv/84446e6aa5b3689e8b84
passport.serializeUser(function(user, done) {
  done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
  connection.query(`SELECT * FROM Users WHERE ID = ${id}`,function(err, rows){	
    done(err, rows[0]);
  });
  });

// Login
passport.use('local-login', new LocalStrategyStrategy(
  function(username, password, done) {
    console.log('Your tying to login')
    connection.query(`SELECT * FROM Users WHERE Username = '${username}'`,
      function(err, users){
        const user = users[0];
        console.log(user)
        if (err) {console.log('Error'); return done(err);}
        if (!user) {console.log('Wrong user'); return done(null, false, { message: 'Incorrect username.' });}
        if (user.Password != password) {console.log('Wrong password'); return done(null, false, { message: 'Incorrect password.' });}
        console.log('Success');
        return done(null, user);	
      });
}));

//Signup

// function isAuthenticated(req, res, next) {
//   if (req.isAuthenticated())
//     return next();
//   res.redirect('/login');
// }

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/Questionnaire', failureRedirect: '/login',
    // failureFlash: true
    // failureFlash: 'Invalid username or password', successFlash: 'Welcome!'
})
);

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