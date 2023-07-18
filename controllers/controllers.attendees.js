import pool from "../database/dbLink.js";

export async function insertAttendee(name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode) {
  const query = `INSERT INTO attendees (name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                 RETURNING attendee_id`;
  const values = [name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode];
  const result = await pool.query(query, values);
  const attendeeId = result.rows[0].attendee_id;
  return attendeeId;
}
