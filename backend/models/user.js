import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  pmisId: { type: String, required: true, unique: true },  // Employee ID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  password: { type: String, required: true }, // later use bcrypt for hashing
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
