import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<h1>Home page</h1>} />
          <Route exact path="/login" element={<h1>Login</h1>} />
          <Route exact path="/register" element={<h1>Register</h1>} />
          <Route exact path="/profile" element={<h1>Profile</h1>} />
          <Route exact path="/createtask" element={<h1>Create Task</h1>} />
          <Route exact path="/edittask" element={<h1>Edit Task</h1>} />
          <Route exact path="/tasklist" element={<h1>Task List</h1>} />
          <Route exact path="/taskdetail" element={<h1>Task Detail</h1>} />
          <Route element={() => <p>Page not found !</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
