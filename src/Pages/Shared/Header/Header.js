import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
                          {/* NAVBAR */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/home" style={{ color: "aqua" }}>
            SuperGlass
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                HOME
              </Nav.Link>
              
            </Nav>
                        {/* Conditional username and logout nav */}
            <Nav>
              {user.email ? (
                <>
                <Nav.Link as={NavLink} to="/dashboard" className="text-white">
                DASHBOARD
              </Nav.Link>
                  <Nav.Link href="#user" className="text-info">
                    {user.displayName || user.email}
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/home"
                    className="text-info"
                    onClick={logOut}
                  >
                    LOGOUT
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={NavLink} to="/login" className="text-info">
                  LOGIN
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;