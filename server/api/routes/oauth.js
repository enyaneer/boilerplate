const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const exampleUser = require('../../db/models/exampleUser')

// collect our google configuration into an object
const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
};

// configure the strategy with our config object, and write the function that passport will invoke after google sends
// us the user's profile and access token
const strategy = new GoogleStrategy(googleConfig, function (token, refreshToken, profile, done) {
  const googleId = profile.id;
  const username = profile.displayName;
  const email = profile.emails[0].value;

  exampleUser.findOne({where: { googleId: googleId  }})
    .then(function (user) {
      if (!user) {
        return exampleUser.create({ username, email, googleId })
          .then(function (user) {
            done(null, user);
          });
      } else {
        done(null, user);
      }
    })
    .catch(done);
});


module.exports = strategy
