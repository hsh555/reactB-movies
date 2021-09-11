import { faClock, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import poster from "../../assets/images/p-1.jpg";
import List from "../../components/common/list";
import Loader from "../../components/common/loader";
import MediaList from "../../components/common/media-list";
import SingleMovieList from "../../components/common/silmilar-list";
import SimilarList from "../../components/common/silmilar-list";
import {
  getSingleSimilarMoviesAction,
  toggleLoadingAction,
} from "../../store/public/action";
import { scrollToTop } from "../../utils/funcs";
import "./style.scss";

const SingleMoviePage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const { toggleLoading } = useSelector((state) => state.publicReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      dispatch(toggleLoadingAction(true));
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=9ebc8a9ee76ea9d34180fb6bb7b7ac14&language=en-U`
        );
        if (res.ok) {
          const resJson = await res.json();
          setMovie(resJson);
        }
        throw new Error(res.status);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(toggleLoadingAction(false));
      }
    };
    getMovie();
    scrollToTop();
  }, [dispatch, movieId]);

  return toggleLoading ? (
    <Loader />
  ) : (
    <>
      <Container
        fluid
        className="single-movie"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        }}
      >
        <div className="overlay"></div>
        <Container className="custom-container">
          <Row className="movie-info py-4">
            <Col sm={12} md={3}>
              <div className="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
              </div>
            </Col>
            <Col sm={12} md={9}>
              <div className="movie-text mt-4 mt-md-0">
                <div className="movie-text-header mb-3">
                  <h2 className="title">{movie.title}</h2>
                  <span className="release_date badge">
                    {movie.release_date}
                  </span>
                </div>
                <div className="info pb-2 mb-3">
                  <span className="vote badge">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    {movie.vote_average}({movie.vote_count})
                  </span>
                  <span className="cats badge">Action . Comedy</span>
                  <span className="time badge">
                    <FontAwesomeIcon icon={faClock} />
                    {movie.runtime}
                  </span>
                  <span className="contries badge">
                    <FontAwesomeIcon icon={faGlobeEurope} />
                    US/India
                  </span>
                  <p className="tagline">{movie.tagline}</p>
                </div>
                <p className="desc">{movie.overview}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="custom-container">
        <Row>
          <Col>
            <SingleMovieList
              title={"Similar"}
              infoList={{ type: "movie", movieId, name: "similar" }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SingleMovieList
              title={"Recommendations"}
              infoList={{ type: "movie", movieId, name: "recommendations" }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MediaList
              title={"Media"}
              id={movieId}
              // infoList={{ type: "movie", name: "upcoming" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleMoviePage;
