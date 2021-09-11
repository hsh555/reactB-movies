// external components
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// internal hooks
import { useState } from "react";
// external hooks
import { useSelector } from "react-redux";
// styles
import "./style.scss";

const AdvanceSearch = () => {
  const { movieGenres } = useSelector((state) => state.publicReducer);
  const [genreId, setGenreId] = useState(28);

  const handleSelectGenre = (e) => {
    setGenreId(e.target.value);
  };

  return (
    <div className="advance-search p-5">
      <div className="overlay"></div>
      <h1 className="title mb-5">What are you looking for?</h1>
      {/* start form */}
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
              <Form.Select
                aria-label="Default select example"
                onClick={handleSelectGenre}
              >
                {movieGenres.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </Form.Select>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <Link
              to={`/movie/genre/${genreId}`}
              className="btn search-btn w-100 mt-5 mt-md-0"
            >
              Find
            </Link>
          </Col>
        </Row>
      </Form>
      {/* end form */}
    </div>
  );
};

export default AdvanceSearch;
