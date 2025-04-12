//src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.ico";
import styles from "../styles/NavBar.module.css";

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
          <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              exact
              to="/Login"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-right-to-bracket"></i> Login
            </NavLink>
            <NavLink
              exact
              to="/Register"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-registered"></i> Register
            </NavLink>
            <NavLink
              exact
              to="/profile"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i className="fa-solid fa-user"></i> Profile
            </NavLink>
            <NavLink
              exact
              to="/settings"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i className="fa-solid fa-user"></i> Settings
            </NavLink>
            <NavDropdown
              title={
                <span
                  className={styles.NavLink}
                  activeClassName={styles.active}
                >
                  <i className="fa-solid fa-check"></i> Tasks
                </span>
              }
              id="navbarScrollingDropdown"
              className={styles.NavDropdown}
            >
              <NavDropdown.Item>
                <NavLink
                  exact
                  to="/CreateTask"
                  className={styles.NavLink}
                  activeClassName={styles.active}
                >
                  <i class="fa-solid fa-file-pen"></i> Create Task
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  exact
                  to="/EditTask"
                  className={styles.NavLink}
                  activeClassName={styles.active}
                >
                  <i class="fa-solid fa-file-pen"></i> Edit Task
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  exact
                  to="/tasklist"
                  className={styles.NavLink}
                  activeClassName={styles.active}
                >
                  <i className="fa-solid fa-list-check"></i> Task List
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
