// CreateTask.js
import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/tasks", task);
      setTask({
        title: "",
        description: "",
        dueDate: "",
        priority: "low",
      });
      console.log("Task created successfully");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <Card className="p-4 shadow" style={{ minWidth: "350px" }}>
            <h2 className="text-center mb-4">Create Task | Edit Task</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="taskTitle" className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="taskDescription" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={task.description}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="taskDueDate" className="mb-3">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="taskPriority" className="mb-4">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={task.priority}
                  onChange={handleInputChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Form.Select>
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Create Task
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateTask;
