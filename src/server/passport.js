import LocalStrategy from 'passport-local';

const LocalStrategyStrategy = LocalStrategy.Strategy;

export function passportConfig(passport, connection) {
    passport.serializeUser(function(user, done) {
		done(null, user.ID);
    });

    passport.deserializeUser(function(ID, done) {
		connection.query('SELECT * FROM Users WHERE ID = '+ID,function(err,rows){	
			done(err, rows[0]);
		});
    });
      
      // Login
      passport.use('local-login', new LocalStrategyStrategy(
        function(username, password, done) {
          connection.query(`SELECT * FROM Users WHERE Username = '${username}'`, // TODO: add hashing
            function(err, users){
              const user = users[0];
              if (err) return done(err);
              if (!user) return done(null, false, { message: 'Incorrect username.' });
              if (user.Password != password) return done(null, false, { message: 'Incorrect password.' });
              return done(null, user);	
            });
      }));
      
      //Signup
};