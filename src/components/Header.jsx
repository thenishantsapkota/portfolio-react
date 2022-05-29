import "../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">Portfoilo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" active={true}>
              Home
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
