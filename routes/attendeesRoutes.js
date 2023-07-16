import { Router } from "express";
import {
    createAttendee
} from '../controllers/controllers.attendees.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
      const {
        name,
        email,
        staying_monday,
        hackathon_interest,
        staying_tuesday,
        going_out_interest,
      } = req.body;
  
      await createAttendee(name, email, staying_monday, hackathon_interest, staying_tuesday, going_out_interest);
  
      res.status(201).json({ message: 'Attendee created successfully.' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while creating the attendee.' });
    }
});

export default router;