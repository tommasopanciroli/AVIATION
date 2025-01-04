import { Nav, Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary align-items-center">
      <Container>
        <Navbar.Brand href="#home">LupoAviatore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About me
            </Link>
            <Link className="nav-link" to="/contacts">
              Contact me
            </Link>
            <Link className="nav-link" to='/login'>Login</Link>
            <Link className="nav-link">Pacchetti</Link>
            <Link
              className="nav-link"
              to="https://www.linkedin.com/in/alberto-panciroli-0a9b7884/"
            >
              Il mio Linkedin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
