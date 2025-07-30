const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const employeeRoutes = require("./routes/employeeRoutes");
const pool = require("./db");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create table if not exists
pool.query(`
  CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    department VARCHAR(100)
  )
`);

// Routes
app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
