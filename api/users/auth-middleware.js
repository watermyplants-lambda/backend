const jwt = require("jsonwebtoken")
const secrets =require('./secrets')
module.exports = (req, res, next) => {
    // add code here to verify users are logged in
    const token = req.headers.authorization;
  console.log(token)
    if (!token) {
      return res.status(401).json({ message: 'we wants token' });
    }
  
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if (err) {
        console.log('decoded error ->', err);
        return res.status(401).json({ message: 'token bad' });
      }
  
      console.log('decoded token ->', decoded);
      req.decodedJwt = decoded;
      next();
    });
  };
