import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary align-items-center">
      <Container >
        <Navbar.Brand href="#home">LupoAviatore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center">
            <Link className="text-decoration-none text-dark" to="/home">
              Home
            </Link>
            <Link className="text-decoration-none text-dark mx-2" to="/about">
              About me
            </Link>
            <Link className="text-decoration-none text-dark" to="/contact">
              Contact me
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/pacchetti">
                Pacchetti
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/findme">
                Dove trovarmi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/alberto-panciroli-0a9b7884/">
                Il mio Linkedin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
