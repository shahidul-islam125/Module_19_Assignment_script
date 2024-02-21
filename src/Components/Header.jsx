import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const navLinkStyle = {
  color: "black",
  textDecoration: "none",
  marginRight: "15px",
  fontSize: "20px",
};

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img src="https://htmldemo.net/hmart/hmart/assets/images/logo/footer-logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <NavLink to="/" style={navLinkStyle}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/products" style={navLinkStyle}>
                Products
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contact" style={navLinkStyle}>
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className="btn btnwidth btn-success">Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
