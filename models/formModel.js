import { pool } from "../db/db.js";

// The create table query
// CREATE TABLE drink_preferences (
//   id SERIAL PRIMARY KEY,
//   no_alcohol BOOLEAN,
//   beer BOOLEAN,
//   wine BOOLEAN,
//   spirits BOOLEAN,
//   beast_mode BOOLEAN
// );

// CREATE TABLE attendees (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   staying_monday BOOLEAN,
//   hackathon_interest BOOLEAN,
//   staying_tuesday BOOLEAN,
//   going_out_interest BOOLEAN,
//   drink_preference_id INT,
//   FOREIGN KEY (drink_preference_id) REFERENCES drink_preferences(id)
// );

// Select query

// SELECT a.name, a.email, a.staying_monday, a.hackathon_interest, a.staying_tuesday, a.going_out_interest,
//        d.no_alcohol, d.beer, d.wine, d.spirits, d.beast_mode
// FROM attendees a
// JOIN drink_preferences d ON a.drink_preference_id = d.id;

// Insert query

// INSERT INTO drink_preferences (no_alcohol, beer, wine, spirits, beast_mode)
// VALUES (false, true, false, true, false);

// INSERT INTO attendees (name, email, staying_monday, hackathon_interest, staying_tuesday, going_out_interest, drink_preference_id)
// VALUES ('John Doe', 'johndoe@example.com', true, true, false, true, 1);

// This function is used to get all the forms from the database

export const getAllResponses = async () => {
    try {
        const result = await pool.query(
        `SELECT a.name, a.email, a.staying_monday, a.hackathon_interest, a.staying_tuesday, a.going_out_interest,
         d.no_alcohol, d.beer, d.wine, d.spirits, d.beast_mode
         FROM attendees a
         JOIN drink_preferences d ON a.drink_preference_id = d.id;`
        );
        return result.rows;
    } catch (error) {
        throw error;
    }
}

// This function is used to add a new form to the database

export const addResponse = async (response) => {
    try {
        const result = await pool.query(
            `INSERT INTO drink_preferences (no_alcohol, beer, wine, spirits, beast_mode)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING id;`,
             [response.no_alcohol, response.beer, response.wine, response.spirits, response.beast_mode]
        );
        const drinkPreferenceId = result.rows[0].id;
        await pool.query(
            `INSERT INTO attendees (name, email, staying_monday, hackathon_interest, staying_tuesday, going_out_interest, drink_preference_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7);`,
             [response.name, response.email, response.staying_monday, response.hackathon_interest, response.staying_tuesday, response.going_out_interest, drinkPreferenceId]
        );
    } catch (error) {
        throw error;
    }
}