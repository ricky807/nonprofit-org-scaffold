import React from "react";

import logo from "../../../images/familypromiselogo.png";

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
              style={{ maxHeight: "100px", width: "100%" }}
              navbarScroll
            >
              <NavDropdown
                className="ml-auto"
                title="Who We Are"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/mission">
                  MISSION & VISION
                </NavDropdown.Item>
                <NavDropdown.Item href="/history">HISTORY</NavDropdown.Item>
                <NavDropdown.Item href="/staff">STAFF</NavDropdown.Item>
                <NavDropdown.Item href="/board">BOARD</NavDropdown.Item>
                <NavDropdown.Item href="/financials">
                  FINANCIALS
                </NavDropdown.Item>
                <NavDropdown.Item href="/communitypartners">
                  COMMUNITY PARTNERS
                </NavDropdown.Item>
                <NavDropdown.Item href="/archive">STORIES</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="What We Do" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/needHelp">NEED HELP?</NavDropdown.Item>
                <NavDropdown.Item href="/prevent">PREVENT</NavDropdown.Item>
                <NavDropdown.Item href="/hap">
                  HOUSING ASSISTANCE
                </NavDropdown.Item>

                <NavDropdown.Item href="/provide">PROVIDE</NavDropdown.Item>

                <NavDropdown.Item href="/prepare">PREPARE</NavDropdown.Item>

                <NavDropdown.Item href="/covid19response">
                  COVID 19 RESPONSE
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Ways To Give" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/goods-items">
                  GOODS & ITEMS
                </NavDropdown.Item>
                <NavDropdown.Item href="/learn">LEARN MORE</NavDropdown.Item>
                <NavDropdown.Item href="/volunteer">VOLUNTEER</NavDropdown.Item>

                <NavDropdown.Item href="/internships">
                  INTERNSHIPS
                </NavDropdown.Item>
                <NavDropdown.Item href="/careers">CAREERS</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Events" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/holidays">
                  Holidays 2021
                </NavDropdown.Item>
                <NavDropdown.Item href="/59minutes">
                  59 Minutes
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/donate">DONATE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
