const passport = require('passport');
const local = require('./local');
const User = require('../models/user');

module.exports = () => { 
    passport.serializeUser((user, done)=> {
        done(null, user.id);
    });

    passport.deserializeUser(async(id, done) => {
        
        User.findOne({
            where: { id }
        })
        .then(user => done(null, user))
        .catch(err => done(err));
    });

    local();
    // kakao();
};