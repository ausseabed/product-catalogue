import axios from 'axios'
import * as jwt_decode from "jwt-decode";
var aad = require('azure-ad-jwt'); // See https://github.com/MatthewTrout/node-azure-ad-jwt/blob/master/lib/azure-ad-validation-manager.js

// Following the pattern of https://developers.google.com/identity/sign-in/web/backend-auth

module.exports = async function (req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  console.debug(jwt_decode(token));

  aad.verify(token, {
    audience: process.env.AUTH_CLIENT_ID,
    aadIssuerUrlTemplate: process.env.AUTH_HOST + 'v2.0'
  }, function (err, result = false) {
    if (result) {
      console.debug("JWT is valid");
      next();
    } else {
      console.error(err);
      return res.sendStatus(401);
    }
  });
};
