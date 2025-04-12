// //EditTask.js:

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const EditTask = () => {
//   const { id } = useParams();
//   const [task, setTask] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//     priority: "low",
//   });

//   useEffect(() => {
//     // Fetch the task data from the API
//     const fetchTaskData = async () => {
//       try {
//         const response = await axios.get(`/api/tasks/${id}`);
//         setTask(response.data);
//       } catch (error) {
//         console.error("Error fetching task data:", error);
//       }
//     };
//     fetchTaskData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTask((prevTask) => ({
//       ...prevTask,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/api/tasks/${id}`, task);
//       // Display a success message to the user
//       console.log("Task updated successfully");
//     } catch (error) {
//       console.error("Error updating task:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Task</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={task.title}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={task.description}
//             onChange={handleInputChange}
//             required
//           ></textarea>
//         </label>
//         <label>
//           Due Date:
//           <input
//             type="date"
//             name="dueDate"
//             value={task.dueDate}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Priority:
//           <select
//             name="priority"
//             value={task.priority}
//             onChange={handleInputChange}
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </label>
//         <button type="submit">Update Task</button>
//       </form>
//     </div>
//   );
// };

// export default EditTask;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
  });

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get(`/api/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };
    fetchTaskData();
  }, [id]);

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
      await axios.put(`/api/tasks/${id}`, task);
      console.log("Task updated successfully");
    } catch (error) {
      console.error("Error updating task:", error);
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
            <h2 className="text-center mb-4">Edit Task</h2>
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
                  Update Task
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditTask;
