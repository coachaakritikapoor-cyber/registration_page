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

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});


app.post("/api/register", async (req, res) => {
  try {
    const { name, email, contact } = req.body;

    if (!name || !email || !contact) {
      return res.status(400).json({
        success: false,
        message: "Name, email and contact number are required.",
      });
    }

    const existingRegistration = await Registration.findOne({
      $or: [
        { email: email.toLowerCase().trim() },
        { contact: contact.trim() },
      ],
    });

    if (existingRegistration) {
      if (existingRegistration.email === email.toLowerCase().trim()) {
        return res.status(409).json({
          success: false,
          message: "Registration is already done with this email.",
        });
      }

      if (existingRegistration.contact === contact.trim()) {
        return res.status(409).json({
          success: false,
          message: "Registration is already done with this contact number.",
        });
      }
    }

    const registration = await Registration.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      contact: contact.trim(),
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
