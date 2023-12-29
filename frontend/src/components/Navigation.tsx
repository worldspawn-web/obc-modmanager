import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" id="navbrand">
          OBC Storage
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Active</Nav.Link>
            <Nav.Link href="#link">Disabled</Nav.Link>
            <Nav.Link href="#link">In Queue</Nav.Link>
            <Nav.Link href="#link">Declined</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://stmods.org/">
                Stmods
              </NavDropdown.Item>
              <NavDropdown.Item href="https://zemods.ru/">
                ZEmods
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.nexusmods.com/eurotrucksimulator2">
                NexusMods
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" disabled>
                Mod Manager (Client)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;