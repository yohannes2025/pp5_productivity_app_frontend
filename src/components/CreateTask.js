import React, { useState } from "react";
import axios from "axios";

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
      // Reset the form and display a success message
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
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Priority:
          <select
            name="priority"
            value={task.priority}
            onChange={handleInputChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
