const employeeModel = require("../models/employeeModel");

const getEmployees = async (req, res) => {
  try {
    const employees = await employeeModel.getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Failed to get employees" });
  }
};

const addEmployee = async (req, res) => {
  try {
    const newEmployee = await employeeModel.createEmployee(req.body);
    res.json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: "Failed to add employee" });
  }
};

const editEmployee = async (req, res) => {
  try {
    const updatedEmployee = await employeeModel.updateEmployee(req.params.id, req.body);
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: "Failed to update employee" });
  }
};

const removeEmployee = async (req, res) => {
  try {
    await employeeModel.deleteEmployee(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete employee" });
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  editEmployee,
  removeEmployee,
};
