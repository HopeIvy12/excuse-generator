import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // This ensures the SSL certificate is accepted even if not fully verified (common in development environments)
  },
});

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

async function fetchAllExcuses() {
  try {
    const getExcuses = await pool.query("SELECT * FROM excuses");
    console.log(getExcuses.rows);
    return getExcuses.rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}

app.get("/", async function (req, res) {
  console.log("request received!");
  try {
    const excuses = await fetchAllExcuses();
    console.log(excuses);
    res.status(200).json({ status: "success", payload: excuses });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "could not GET from server" });
  }
});

console.log("Database URL:", process.env.DATABASE_URL);
