const pool = require("../db");

const getAllEmployees = async () => {
  const result = await pool.query("SELECT * FROM employees ORDER BY id ASC");
  return result.rows;
};

const createEmployee = async ({ name, email, department }) => {
  const result = await pool.query(
    "INSERT INTO employees (name, email, department) VALUES ($1, $2, $3) RETURNING *",
    [name, email, department]
  );
  return result.rows[0];
};

const updateEmployee = async (id, { name, email, department }) => {
  const result = await pool.query(
    "UPDATE employees SET name = $1, email = $2, department = $3 WHERE id = $4 RETURNING *",
    [name, email, department, id]
  );
  return result.rows[0];
};

const deleteEmployee = async (id) => {
  await pool.query("DELETE FROM employees WHERE id = $1", [id]);
};

module.exports = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
