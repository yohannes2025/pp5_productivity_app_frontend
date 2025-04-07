import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("dueDate");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("/api/tasks")
      .then((response) => {
        setTasks(response.data);
        setFilteredTasks(response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterTasks(query);
  };

  const filterTasks = (query) => {
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  const handleSort = (field) => {
    setSortBy(field);
    const sorted = [...filteredTasks].sort((a, b) => a[field] - b[field]);
    setFilteredTasks(sorted);
  };

  const handleTaskComplete = (task) => {
    axios
      .put(`/api/tasks/${task.id}`, { ...task, status: "completed" })
      .then((response) => {
        const updatedTasks = filteredTasks.map((t) =>
          t.id === task.id ? response.data : t
        );
        setFilteredTasks(updatedTasks);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Task List View</h1>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        <button onClick={() => handleSort("dueDate")}>Sort by Due Date</button>
        <button onClick={() => handleSort("priority")}>Sort by Priority</button>
      </div>
      <TaskList tasks={filteredTasks} onTaskComplete={handleTaskComplete} />
    </div>
  );
};

export default TaskList;
