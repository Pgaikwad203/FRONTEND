const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const otps = {}; // Store OTPs temporarily (use a database for production)

// Send OTP
app.post('/send-otp', (req, res) => {
    const { username } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

    otps[username] = otp; // Save OTP (use a database in production)

    // Simulate sending OTP (via email or SMS)
    console.log(`Sending OTP ${otp} to ${username}`);
    res.json({ success: true });
});

// Verify OTP
app.post('/verify-otp', (req, res) => {
    const { username, otp } = req.body;

    if (otps[username] && otps[username] == otp) {
        delete otps[username]; // Remove OTP after successful verification
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
