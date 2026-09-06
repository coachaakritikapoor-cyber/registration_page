import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Aakriti's Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,

      subject: "New Registration Received",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      
        <h2>🎉 New Registration</h2>

        <p>A new person has registered on the website.</p>

        <hr>

        <p>
          <strong>Name:</strong> ${cleanName}
        </p>

        <p>
          <strong>Email:</strong> ${cleanEmail}
        </p>

        <p>
          <strong>Contact:</strong> ${cleanContact}
        </p>

        <p>
          <strong>Registration ID:</strong> ${registration._id}
        </p>

        <hr>

        <p>
          This registration was submitted from the website.
        </p>

      </div>
      `,
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

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;
