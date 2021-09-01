import { Col, Row, Form, Button } from "react-bootstrap";
import "./style.scss";

const AdvanceSearch = () => {
  return (
    <div className="advance-search p-5">
        <div className="overlay"></div>
      <h1 className="title mb-5">What are you looking for?</h1>
      <Form className="advance-search-form">
        <Row>
          <Col sm={12} md={4}>
            <Form.Select aria-label="Default select example">
              <option>Movie and TV</option>
              <option value="1">Movie</option>
              <option value="2">TV</option>
            </Form.Select>
          </Col>
          <Col sm={12} md={6} className="mt-4 mt-md-0">
            <div className="genre-selection">
              <h3 className="mr-2">With Genre</h3>
              <Form.Select aria-label="Default select example">
                <option>Comedy</option>
                <option value="1">Action</option>
                <option value="2">Western</option>
                <option value="3">War</option>
                <option value="2">Fantasy</option>
                <option value="3">Sport</option>
                <option value="2">Love</option>
                <option value="3">Scary</option>
              </Form.Select>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <Button variant="primary" type="submit" className="search-btn w-100 mt-5 mt-md-0">
              Find
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AdvanceSearch;
