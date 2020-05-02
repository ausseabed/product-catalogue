const passport = require("passport");
// Following the pattern of https://developers.google.com/identity/sign-in/web/backend-auth

module.exports.isAuthorised = passport.authenticate('oauth-bearer',
  { session: false, failureRedirect: '/404' })
