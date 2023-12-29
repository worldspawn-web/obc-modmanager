import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">OBC Storage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Active</Nav.Link>
            <Nav.Link href="#link">Disabled</Nav.Link>
            <Nav.Link href="#link">In Queue</Nav.Link>
            <Nav.Link href="#link">Declined</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">StMods</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ZEmods</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">NexusMods</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
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
