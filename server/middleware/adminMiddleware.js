// requireAdmin.js

const requireAdmin = (req, res, next) => {
    // Check if the user object exists and has the role of 'admin'
    if (req.user && req.user.role === 'admin') {
      next(); // User is an admin, continue to the next middleware or route handler
    } else {
      // If the user is not an admin, return a 403 Forbidden response
      return res.status(403).json({ message: 'Access denied - Requires admin role' });
    }
  };
  
  export default requireAdmin;