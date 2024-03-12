import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: maxAge,
    });
};

// Basic error handler - customize according to your needs
const handleErrors = (err) => {
    let errors = { email: '', password: '' };

    // Duplicate error code
    if (err.code === 11000) {
        errors.email = 'That email is already registered';
        return errors;
    }

    // Validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

// Handling user signup
export const registerUser = async (req, res) => {
    const {name, email, password, role, phone} = req.body;
    try {
        const user = await User.create({ name, email, password, role, phone });
        const token = createToken(user._id);
        // Setting the JWT cookie and responding with the user ID
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ userId: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json(errors);
    }
};
