import { useEffect } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import CardMovie from "../../components/base/card-movie";
import Loader from "../../components/common/loader";
import { popularMoviesListFetch } from "../../store/public/action";
import { scrollToTop } from "../../utils/funcs";
import "./style.scss";

const MoviesListPage = () => {
  const { popularMoviesList, toggleLoading } = useSelector(
    (state) => state.publicReducer
  );
  const dispatch = useDispatch();

  let location = useLocation();

  const type = location.pathname.indexOf("movie") === 1 ? "movie" : "tv";

  useEffect(() => {
    dispatch(
      popularMoviesListFetch([
        `https://api.themoviedb.org/3${location.pathname}?api_key=9ebc8a9ee76ea9d34180fb6bb7b7ac14&language=en-US&page=1`,
        "tv",
      ])
    );
    scrollToTop();
  }, [location.pathname]);

  return (
    <Container className="custom-container pt-5" id="moviesList">
      {toggleLoading ? (
        <Loader />
      ) : (
        <Row>
          {popularMoviesList.map((item) => {
            return (
              <Col sm={6} md={3} lg={2} className="custom-col">
                <CardMovie data={item} type={type} />
              </Col>
            );
          })}
        </Row>
      )}
      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination className="custom-paginaion">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>
              <Link to="/">1</Link>
            </Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>
              <Link to="/">1</Link>
            </Pagination.Item>
            <Pagination.Item>
              <Link to="/">1</Link>
            </Pagination.Item>
            <Pagination.Item active>
              <Link to="/movie/popular">555</Link>
            </Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesListPage;
