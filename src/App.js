// App.js
import React from "react";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Register from "./components/Register";
import CalendarView from "./components/Calendar"; // Import the CalendarView
import Profile from "./components/Profile"; // Import the Profile component
// import Authentication from "./components/Authentication"; // Import the Authentication component
// import TaskForm from "./components/TaskForm";
import "react-datepicker/dist/react-datepicker.css";
// import CreateTask from "./components/CreateTask";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TaskList from "./components/TaskList"; // Import the TaskList component

function App() {
  console.log("App Component Rendered");
  return (
    <div className="App">
      <NavBar />
      <TaskList />
      {/* Other Routes Here */}
      <Routes>
        <Route exact path="/" element={<CalendarView />} />{" "}
        {/* Use CalendarView */}
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} /> */}
        {/* {/* <Route path="/tasks/new" component={TaskForm} /> */}
        {/* console.log("Rendering TaskForm"); */}
        {/* <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/tasklist" element={<TaskList />} /> */}
        {/* <Route exact path="/authentication" element={<Authentication />} /> */}
        {/* <Route path="/createtask" component={CreateTask} /> */}
        {/* Add other routes as necessary */}
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
