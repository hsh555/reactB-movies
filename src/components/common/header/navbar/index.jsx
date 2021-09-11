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
import { useRef, useState } from "react";

const NavBar = () => {
  const searchValue = useRef("");
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value.length >= 1) {
      setInputValue(value);
    }
  };

  const handleSearchClick = (e) => {
    if(inputValue.length < 1) {
      e.preventDefault();
    }
  }

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
            <Link className="dropdown-item" to="/movie/popular">
              popular
            </Link>
            <Link className="dropdown-item" to="/movie/top_rated">
              top rated
            </Link>
            <Link className="dropdown-item" to="/movie/upcoming">
              upcoming
            </Link>
          </NavDropdown>
        </Nav>
        <Form inline className="custom-search-form">
          <InputGroup className="mb-3 mb-lg-0">
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              ref={searchValue}
              onChange={handleOnChange}
            />
            <Link
              to={`/movie/search/${inputValue}`}
              className="btn btn-primary"
              onClick={handleSearchClick}
            >
              Search
            </Link>
          </InputGroup>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
