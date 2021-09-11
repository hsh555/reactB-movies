import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AdvanceSearch from "../../components/common/advance-search";
import List from "../../components/common/list";
import {
  movieGenresFetch,
} from "../../store/public/action";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      movieGenresFetch([
        "https://api.themoviedb.org/3/genre/movie/list?api_key=9ebc8a9ee76ea9d34180fb6bb7b7ac14&language=en-US",
        "movie",
      ])
    );
    dispatch(
      movieGenresFetch([
        "https://api.themoviedb.org/3/genre/tv/list?api_key=9ebc8a9ee76ea9d34180fb6bb7b7ac14&language=en-US",
        "tv",
      ])
    );
  }, []);

  return (
    <Container className="custom-container pt-4">
      {/* start advance search */}
      <Row>
        <Col>
          <AdvanceSearch />
        </Col>
      </Row>
      {/* end advance search */}

      {/* start lists */}
      <Row>
        <Col>
          <List
            title={"Popular Movies"}
            infoList={{ type: "movie", name: "popular" }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <List
            title={"Top Rated Movies"}
            infoList={{ type: "movie", name: "top_rated" }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <List
            title={"UP Coming Movies"}
            infoList={{ type: "movie", name: "upcoming" }}
          />
        </Col>
      </Row>
   
    </Container>
  );
};

export default HomePage;
