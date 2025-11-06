import Auth from "../models/authModels.js";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Auth.findOne({ email, password });

        if(!user) return res.status(404).json({ message: "User not found" });

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1m" });

        res.status(200).json({ message: "Login successful", user, token });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const Register = async (req, res) => {
    try {
        const { first_name, last_name, email, password, phone } = req.body;

        if(!first_name || !last_name || !email || !password || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        };

        const user = await Auth.findOne({ email });

        if(user) {
            return res.status(400).json({ message: "User already exists" });
        };

        const newUser = await Auth.create(req.body);

        res.status(201).json({
            message: "User registered successfully",
            data: newUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await Auth.find();
        res.status(200).json({ message: "Users fetched successfully", data: users });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};