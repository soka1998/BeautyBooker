
const requireStaff = (req, res, next) => {
    // Check if the user object exists and has the role of 'staff'
    if (req.user && req.user.role === 'staff') {
        next(); // User is staff, continue to the next middleware or route handler
    } else {
        // If the user is not staff, return a 403 Forbidden response
        return res.status(403).json({ message: 'Access denied - Requires staff role' });
    }
};

export default requireStaff;