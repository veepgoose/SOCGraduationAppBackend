import pool from "../database/dbLink.js";

export async function insertAttendee(name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode) {
  await pool.query('INSERT INTO attendees (name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode]);
}

// create a get function for the attendees