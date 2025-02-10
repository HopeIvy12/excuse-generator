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

app.get("/categories", async (req, res) => {
  // try {
  res.json("Hello");
  console.log("Hello");
  //   const result = await pool.query(
  //     "SELECT DISTINCT category FROM soc_wk8_excuses"
  //   );

  //   if (result.rows.length === 0) {
  //     return res.status(404).json([]);
  //   }

  //   res.json(result.rows.map((row) => row.category)); // Send only category names
  // } catch (error) {
  //   console.error("Error fetching categories:", error);
  //   res.status(500).json({ error: "Internal server error" });}
});

app.get("/excuses/random/:category", async function (req, res) {
  try {
    const category = decodeURIComponent(req.params.category);
    const result = await pool.query(
      "SELECT * FROM soc_wk8_excuses WHERE LOWER(category) = LOWER($1) ORDER BY RANDOM() LIMIT 1",
      [category]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "No excuses found for this category" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching excuse:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// async function fetchAllExcuses() {
//   try {
//     const getExcuses = await pool.query(
//       "SELECT * FROM soc_wk8_excuses WHERE category=($1) ORDER BY RANDOM() LIMIT 1",
//       [category]
//     );
//     console.log(getExcuses.rows);
//     return getExcuses.rows;
//   } catch (error) {
//     console.error("Error executing query:", error);
//     throw error;
//   }
// }

// app.get("/", async function (req, res) {
//   console.log("request received!");
//   try {
//     const excuses = await fetchAllExcuses();
//     console.log(excuses);
//     res.status(200).json({ status: "success", payload: excuses });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ status: "error", message: "could not GET from server" });
//   }
// });

// async function fetchCatgeoryByName() {

// };

// app.get("/:categories", async function (req, res) {
//   console.log("request received!");
//   try {
//     const categories = await fetchCatgeoryByName();
//     console.log(excuses);
//     res.status(200).json({ status: "success", payload: categories });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ status: "error", message: "could not GET from server" });
//   }
// });

console.log("Database URL:", process.env.DATABASE_URL);
