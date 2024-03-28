import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import validator from 'validator';



dotenv.config()

const maxAge = 24 * 60 * 60; // 24 hours in seconds

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: maxAge,
    });
};

const handleErrors = (err) => {
    let errors = { email: '', password: '' };

    if (err.code === 11000) {
        errors.email = 'That email is already registered';
        return errors;
    }

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

// Function to generate JWT
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

export const registerUser = async (req, res) => {
    const { name, email, password, role, phone } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Manual password length validation
    if (password.length < 5) {
        return res.status(400).json({ errors: { password: 'Password must be at least 5 characters long' } });
    }


    try {
        const user = await User.create({ name, email, password: hashedPassword, role, phone });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ userId: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json(errors);
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // Check for an empty password or email
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please provide an email and password' });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const token = generateToken(user._id); // Adjusted to use generateToken

        // Example: Sending the token in a cookie
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

        // Example: Including the token in the response body along with user details
        res.status(200).json({
            msg: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token // Send the token back to the client
        });
    } catch (err) {
        res.status(400).json({ errors: 'An error occurred' });
    }
};
