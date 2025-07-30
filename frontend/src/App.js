import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
  const [rowData, setRowData] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", department: "" });
  const [selectedId, setSelectedId] = useState(null);

  const API = process.env.REACT_APP_API_URL;

  const fetchData = async () => {
    const res = await axios.get(`${API}/employees`);
    setRowData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedId) {
      await axios.put(`${API}/employees/${selectedId}`, form);
    } else {
      await axios.post(`${API}/employees`, form);
    }
    setForm({ name: "", email: "", department: "" });
    setSelectedId(null);
    fetchData();
  };

  const handleEdit = (employee) => {
    setForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
    });
    setSelectedId(employee.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/employees/${id}`);
    fetchData();
  };

  return (
    <div className="container mt-4">
      <h2>Employee Management</h2>
      <EmployeeForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        selectedId={selectedId}
      />
      <EmployeeTable
        rowData={rowData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
