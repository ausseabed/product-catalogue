const config = {
  identityMetadata: process.env.AUTH_HOST + 'v2.0/.well-known/openid-configuration',
  clientID: process.env.AUTH_CLIENT_ID,
  validateIssuer: true,
  loggingLevel: 'warn',
  passReqToCallback: false
};
module.exports = config;
