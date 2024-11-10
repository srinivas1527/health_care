import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();

// POST route to submit a new contact form
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact data to MongoDB
    await newContact.save();
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ message: 'Error submitting contact form. Please try again later.' });
  }
});

export default router;
