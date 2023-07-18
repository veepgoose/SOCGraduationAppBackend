import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import pool from './database/dbLink.js';

const app = express();
app.use(express.json());
app.use(cors());

// Route to handle form data submission
app.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body;

    const insertQuery = `
      INSERT INTO your_table_name (column1, column2, column3)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [formData.value1, formData.value2, formData.value3]; // Replace with the actual values you want to insert

    const { rows } = await pool.query(insertQuery, values);
    console.log('Inserted data:', rows[0]);

    return res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error handling form data submission:', error);
    return res.status(500).json({ error: 'An error occurred while processing the form data.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
