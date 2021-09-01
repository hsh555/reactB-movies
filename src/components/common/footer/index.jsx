import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <Container className="custom-container py-4 mt-5">
        <Row>
          <Col>
            <p className="m-0">
              Created with <FontAwesomeIcon icon={faCoffee} className="coffee" /> and{" "}
              <FontAwesomeIcon icon={faHeart} className="heart" /> By Hadi Shadi
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
