import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  InputGroup,
  Image,
  //   InputGroup,
} from "react-bootstrap";
import "./style.scss";
import logo from "../../../../assets/images/logo2.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">
        <Link to="/">
          <Image className="header-logo" src={logo} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between align-center"
      >
        <Nav className="custom-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/people">
            people
          </Link>
          <NavDropdown
            title="Movie"
            id="basic-nav-dropdown"
            className="custom-dropdown"
          >
            <Link className="dropdown-item" to="/dfd">
              comedy
            </Link>
            <Link className="dropdown-item" to="/dfd">
              action
            </Link>
            <Link className="dropdown-item" to="/dfd">
              war
            </Link>
          </NavDropdown>

          <NavDropdown
            title="TV"
            id="basic-nav-dropdown"
            className="custom-dropdown"
          >
            <Link className="dropdown-item" to="/dfd">
              comedy
            </Link>
            <Link className="dropdown-item" to="/dfd">
              action
            </Link>
            <Link className="dropdown-item" to="/dfd">
              war
            </Link>
          </NavDropdown>
        </Nav>
        <Form inline className="custom-search-form">
          <InputGroup className="mb-3 mb-lg-0">
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
            />
            <Button className="search-btn">Search</Button>
          </InputGroup>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
