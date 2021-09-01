import { Col, Container, Row } from "react-bootstrap";
import AdvanceSearch from "../advance-search";
import NavBar from "./navbar";
import "./style.scss";

const Header = () => {
  return (
    <header bg={"white"} id="header" className="py-1">
      <Container className="custom-container">
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <AdvanceSearch />
          </Col>
        </Row> */}
      </Container>
    </header>
  );
};

export default Header;
