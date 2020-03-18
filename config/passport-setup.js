//importing the middle ware which is passport
const passport = require('passport');
// choosing stategy; you can also use facebook, github, etc besides google
const GoogleStrategy = require('passport-google-oauth20');
// keys are alternative no .env
// (contains credentials and information about the database)
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for the google strat
        callbackURL: '/auth/google/callback',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done)=>{
        // passport callback function
        console.log('##########################');
        console.log(profile);

        console.log(profile.id);
        console.log(profile.displayName);
        console.log(profile.photos[0].value);
    })
);