const AccessControl = require('accesscontrol');
const rbac = require('rbac');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const useragent = require('express-useragent');
const cryptoJS = require('crypto-js');
const bcrypt = require('bcryptjs');

module.exports = {
  AccessControl,
  rbac,
  helmet,
  cors,
  rateLimit,
  jwt,
  useragent,
  cryptoJS,
  bcrypt,
};
