// App.js
import React from "react";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Login from "./components/Login";
import Settings from "./components/Settings";
import Register from "./components/Register";
import Profile from "./components/Profile"; // Import the Profile component
import CreateTask from "./components/CreateTask"; // Import the CreateTask component
import EditTask from "./components/EditTask"; // Import the EditTask component
import TaskList from "./components/TaskList"; // Import the TaskList component
import HomePage from "./components/HomePage";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className={styles.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/edittask" element={<EditTask />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
