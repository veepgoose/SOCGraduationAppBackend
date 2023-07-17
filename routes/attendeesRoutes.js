import express from "express";
import {
    insertAttendee
} from '../controllers/controllers.attendees.js';

import pool from "../database/dbLink.js";

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('hi');
    try {
      const { rows } = await pool.query('SELECT * FROM attendees');
      console.log(rows);
      res.json({success: true, data: rows});
    }
    catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while retrieving attendees.' });
    }
});

router.post('/', async (req, res) => {
    try {
      const {
        name,
        email,
        staying_monday,
        hackathon,
        staying_tuesday,
        going_out_interest,
        beer,
        wine,
        spirits,
        beast_mode
      } = req.body;
  console.log(req.body);
      await insertAttendee(name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode);
  
      res.status(201).json({ message: 'Attendee created successfully.' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while creating the attendee.' });
    }
});

export default router;