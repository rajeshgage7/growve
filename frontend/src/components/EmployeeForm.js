import React, { useEffect } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const EmployeeForm = ({ form, setForm, onSubmit, selectedId }) => {
  useEffect(() => {
    if (!selectedId) {
      setForm({ name: "", email: "", department: "" });
    }
  }, [selectedId, setForm]);

  return (
    <Card className="mb-4 shadow-lg">
      <Card.Body>
        <Card.Title>{selectedId ? "Update Employee" : "Add Employee"}</Card.Title>
        <Form onSubmit={onSubmit}>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter department"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" variant={selectedId ? "warning" : "primary"}>
            {selectedId ? "Update" : "Add"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EmployeeForm;