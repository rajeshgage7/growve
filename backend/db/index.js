const { Pool } = require("pg");

const pool = new Pool({
  user: "employee_user",
  host: "localhost",
  database: "employee_db",
  password: "rajesh",
  port: 5432,
});

module.exports = pool;
