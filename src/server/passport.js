import LocalStrategy from 'passport-local';

const LocalStrategyStrategy = LocalStrategy.Strategy;

export function passportConfig(passport, connection) {
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
};