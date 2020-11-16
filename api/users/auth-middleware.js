const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_SECRET;

function authenticate(req, res, next) {
  let token = req.get("Authorization");
  if (!token && req.session) {
    token = req.session.token
  }

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header."
    });
  }
}

function generateToken(user) {
  const payload = {
    id: user.id
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: "168h"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = {
  authenticate,
  generateToken
};