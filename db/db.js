//Postrgres connection
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// Saves the connection string from the .env file into a const
const connectionString = process.env.DB_CONNECTION_STRING;

if (!connectionString) {
  throw new Error(
    "Please set the DB_CONNECTION_STRING environment variable. Is the env variables set and loaded?"
  );
}

// Creates a new pool using the connection string and exports it for use in our application
export const pool = new pg.Pool({ connectionString });
