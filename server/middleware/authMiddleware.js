import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Middleware to require authentication
const requireAuth = (req, res, next) => {
  // Assuming the token is sent in the Authorization header in Bearer token format
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  // Check if the JSON Web Token exists and is verified
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log(err.message);
        res.status(401).json({ message: 'Unauthorized - Invalid token' });
      } else {
        req.user = decoded; // Optional: Attach decoded token to request
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Unauthorized, no token provided' });
  }
};

export default requireAuth;
