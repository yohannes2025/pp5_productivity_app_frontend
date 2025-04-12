// App.js
import React from "react";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Login from "./components/Login";
import Settings from "./components/Settings";
import Register from "./components/Register";
import Home from "./components/ClendarView"; // Import the CalendarView
import Profile from "./components/Profile"; // Import the Profile component
import CreateTask from "./components/CreateTask"; // Import the CreateTask component
import EditTask from "./components/EditTask"; // Import the EditTask component
import TaskList from "./components/TaskList"; // Import the TaskList component

function App() {
  console.log("App Component Rendered");
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CalendarView />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/edittask" element={<EditTask />} />
        <Route exact path="/tasklist" element={<TaskList />} />
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
