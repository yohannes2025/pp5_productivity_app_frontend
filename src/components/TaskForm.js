import React, { useState } from "react";
import DatePicker from "react-datepicker";

const TaskForm = ({ task = null, users = [], onSubmit }) => {
  console.log("TaskForm Component Rendered");
  // Ensure 'users' prop is passed
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [dueDate, setDueDate] = useState(
    task?.dueDate ? new Date(task.dueDate) : new Date()
  );
  const [priority, setPriority] = useState(task?.priority || "low");
  const [category, setCategory] = useState(task?.category || "");
  const [assignedUsers, setAssignedUsers] = useState(task?.assignedUsers || []);
  const [files, setFiles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title,
      description,
      dueDate,
      priority,
      category,
      assignedUsers,
      files,
    });
  };

  const handleAssignedUserChange = (user) => {
    if (assignedUsers.includes(user)) {
      setAssignedUsers(assignedUsers.filter((u) => u !== user)); // Remove user
    } else {
      setAssignedUsers([...assignedUsers, user]); // Add user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <div>
        Assigned Users:
        {users.map(
          (
            user // Using 'users' prop here
          ) => (
            <div key={user.id}>
              <input
                type="checkbox"
                checked={assignedUsers.includes(user)}
                onChange={() => handleAssignedUserChange(user)}
              />
              {user.name}
            </div>
          )
        )}
      </div>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
