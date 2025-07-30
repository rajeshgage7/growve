# Employee Management App (React + Node.js + PostgreSQL)

This is a full-stack CRUD (Create, Read, Update, Delete) application built with:

- **Frontend**: React + ag-Grid + Bootstrap
- **Backend**: Express.js + PostgreSQL

---

## 🛠 Project Structure

employee-form-project/
│
├── backend/
│   ├── controller/
│   ├── db/
│   │   └── index.js
│   ├── models/
│   ├── routes/
│   │   └── employeeRoutes.js
│   └── index.js
│
├── frontend/
│   └── [React app files]
│
├── package.json (root, with dev scripts)
└── README.md



---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rajeshgage7/growve.git
cd growve

cd backend
npm install

-- Open psql terminal
CREATE DATABASE employee_db;
CREATE USER employee_user WITH ENCRYPTED PASSWORD 'rajesh';
GRANT ALL PRIVILEGES ON DATABASE employee_db TO employee_user;

const { Pool } = require("pg");

const pool = new Pool({
  user: "employee_user",
  host: "localhost",
  database: "employee_db",
  password: "rajesh",
  port: 5432,
});
module.exports = pool;


cd ../frontend
npm install


-- Root-level Scripts for Easier Run
"scripts": {
  "frontend": "npm start --prefix frontend",
  "backend": "npm start --prefix backend",
  "dev": "concurrently \"npm run frontend\" \"npm run backend\""
}
npm install --save-dev concurrently

npm run dev


