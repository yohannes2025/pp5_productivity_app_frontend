//src/components/NavBar.js
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.ico"; // Assuming logo exists in this path
import styles from "../styles/NavBar.module.css"; // Adjust if necessary

function NavBar() {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
          Productivity
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto my-2 my-lg-0" text-left navbarScroll>
            <NavLink
              to="/"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              to="/Login"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-right-to-bracket"></i> Login
            </NavLink>
            <NavLink
              to="/Register"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-registered"></i> Register
            </NavLink>
            <NavLink
              to="/profile"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i className="fa-solid fa-user"></i> Profile
            </NavLink>

            <NavDropdown
              title={
                <span className={styles.NavLink}>
                  <i className="fa-solid fa-check"></i> Tasks
                </span>
              }
              id="navbarScrollingDropdown"
              className={styles.NavDropdown}
            >
              <NavDropdown.Item
                as={NavLink}
                to="/createtask"
                activeClassName={styles.active}
              >
                <i class="fa-solid fa-folder-plus"></i> Create Task
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/EditTask"
                activeClassName={styles.active}
              >
                <i class="fa-solid fa-file-pen"></i> Edit Task
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/tasklist"
                activeClassName={styles.active}
              >
                <i className="fa-solid fa-list-check"></i> Task List
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/taskdetail"
                activeClassName={styles.active}
              >
                <i className="fa-solid fa-circle-info"></i> Task Detail
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
