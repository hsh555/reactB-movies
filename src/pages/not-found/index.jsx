import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const NotFoundPage = () => {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <div className={styles.wrapperInner}>
          <Row>
            <Col sm={12} lg={2}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFrown} />
              </div>
            </Col>
            <Col sm={12} lg={10}>
              <div className={styles.body}>
                <h2 className={styles.bodyTitle}>4O4 - PAGE NOT FOUND</h2>
                <p className={styles.bodyText}>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>
                <Link to="/" className={styles.button}>
                  HOME PAGE
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
