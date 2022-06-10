import React from "react";

import logo from "../../../images/cornerstonePics/Cornerstone LOGO (1).png";


import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";



function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} style={{ maxWidth: "200px", height: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end"
              style={{width: "100%" }}
              navbarScroll
            >
              <NavDropdown className="ml-auto" title="Who We Are" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/mission">MISSION & VISION</NavDropdown.Item>
                <NavDropdown.Item href="/core-values">SERVICES</NavDropdown.Item>
                <NavDropdown.Item href="/staff">LEADERSHIP</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className="ml-auto" title="Ministries" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/core-values">MEN</NavDropdown.Item>
                <NavDropdown.Item href="/history">WOMEN</NavDropdown.Item>
                <NavDropdown.Item href="/staff">YOUTH</NavDropdown.Item>
                <NavDropdown.Item href="/staff">OUTREACH</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/donate">Events</Nav.Link>

              <Nav.Link href="/donate">Sermons</Nav.Link>

              <Nav.Link href="/donate">Give</Nav.Link>
              {/*
              <NavDropdown title="Ways to Give" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/goods-items">GOODS & ITEMS</NavDropdown.Item>
                <NavDropdown.Item href="/learn">LEARN MORE</NavDropdown.Item>
                <NavDropdown.Item href="/volunteer">VOLUNTEER</NavDropdown.Item>
                <NavDropdown.Item href="/internships">INTERNSHIPS</NavDropdown.Item>
                <NavDropdown.Item href="/careers">CAREERS</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/donate">DONATE</Nav.Link>*/}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
