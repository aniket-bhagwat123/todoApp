import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    first_name: { type: String, required: true, },
    last_name: { type: String, required: true, },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true, },
    phone: { type: String, required: true, unique: true, },
}, { timestamps: true } ); 

const Auth = mongoose.model("User", authSchema);

export default Auth;