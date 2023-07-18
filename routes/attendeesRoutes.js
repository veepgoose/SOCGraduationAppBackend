import express from "express";
import { insertAttendee } from '../controllers/controllers.attendees.js';

const router = express.Router();

// Route for creating an attendee
router.post('/', async (req, res) => {
  try {
    const { name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode } = req.body;
    // Insert the attendee into the database or perform any other necessary logic
    await insertAttendee(name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode);
    res.status(201).json({ message: 'Attendee created successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while creating the attendee.' });
  }
});


export default router;

