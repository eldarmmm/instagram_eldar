const passport = require('passport')
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const User = require('./User')
// JWT configuration options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'jwtSecretKey',
};

// Add JWT strategy to Passport
passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    const user = await User.findByPk(jwtPayload.id)
    if (user) done (null, user)
    else done (null, false)
}));

module.exports = {jwtOptions}