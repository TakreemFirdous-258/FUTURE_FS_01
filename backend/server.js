import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

app.post("/send-message", async (req, res) => {
    console.log("Request received:", req.body); 

    const { email, phone, message } = req.body;

    if (!email || !phone || !message) {
        return res.json({
            success: false,
            msg: "All fields are required"
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: "New Portfolio Contact Message",
            text: `
Email: ${email}
Phone: ${phone}
Message: ${message}
            `
        });

        res.json({
            success: true,
            msg: "Message sent successfully!"
        });

    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            msg: "Email failed to send"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
