import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
                          {/* NAVBAR */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/home" style={{ color: "aqua" }}>
            HeavenHEALTH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="text-white">
                SERVICES
              </Nav.Link>
              <NavDropdown title="PAGES" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  as={NavLink}
                  to="/ourdoctors"
                  className="text-dark"
                >
                  OUR DOCTORS
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/question"
                  className="text-dark"
                >
                  HELP & FAQ{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/appointment" className="text-white">
                APPOINTMENT
              </Nav.Link>
            </Nav>
                        {/* Conditional username and logout nav */}
            <Nav>
              {user.email ? (
                <>
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