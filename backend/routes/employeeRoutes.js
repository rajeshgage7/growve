const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.getEmployees);
router.post("/", employeeController.addEmployee);
router.put("/:id", employeeController.editEmployee);
router.delete("/:id", employeeController.removeEmployee);

module.exports = router;
