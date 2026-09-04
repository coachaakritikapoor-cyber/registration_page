import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Registration from "./models/registration.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json())

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};



app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});


app.post("/api/register", async (req, res) => {
  try {
    await connectDB();

    const { name, email, contact } = req.body;

    if (!name || !email || !contact) {
      return res.status(400).json({
        success: false,
        message: "Name, email and contact number are required.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.toLowerCase().trim();
    const cleanContact = contact.trim();

    const existingRegistration = await Registration.findOne({
      $or: [
        { email: cleanEmail },
        { contact: cleanContact },
      ],
    });

    if (existingRegistration) {
      if (existingRegistration.email === cleanEmail) {
        return res.status(409).json({
          success: false,
          message: "Registration is already done with this email.",
        });
      }

      if (existingRegistration.contact === cleanContact) {
        return res.status(409).json({
          success: false,
          message: "Registration is already done with this contact number.",
        });
      }
    }

    const registration = await Registration.create({
      name: cleanName,
      email: cleanEmail,
      contact: cleanContact,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful!",
      data: registration,
    });

  } catch (error) {
    console.error("Registration error:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Registration already exists.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong while registering.",
    });
  }
});

export default app;
