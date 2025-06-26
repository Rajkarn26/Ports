const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Contact = require('./models/contactModel');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://srajkumar2026:RQ62JZLNbxg42VsQ@cineworld.cf3orzf.mongodb.net/?retryWrites=true&w=majority&appName=cineworld', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => {
  console.error('❌ MongoDB Error');
  console.error('Message:', err.message);
  console.error('Stack:', err.stack);
});


// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 's.rajkumar2026@gmail.com',
    pass: 'enjavxbwubfdutvq' // Use an app-specific password
  }
});

// Basic Route (for testing server)
app.get('/', (req, res) => {
  res.send('🚀 Server is working!');
});

// API Route
app.post('/contact_api', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${email}>`,
      to: 's.rajkumar2026@gmail.com',
      subject: subject || 'New Contact Form Message',
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(201).json({ message: '😍 Message sent successfully' });
  } catch (err) {
    console.error('Contact API Error:', err);
    res.status(500).json({ message: '❌ Server error' });
  }
});

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
