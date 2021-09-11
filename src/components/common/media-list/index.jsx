// internal components
import Loader from "../loader";
// external components
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// internal hooks
import { useEffect } from "react";
import { useState } from "react";
// external hooks
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// redux actions
import {
  moviePostersFetch,
  movieVideosFetch,
} from "../../../store/public/action";
// styles
import "./style.scss";
import baseUrls from "../../../utils/base-urls";

const MediaList = ({ id }) => {
  const { moviePosters, movieBackdrops, movieVideos } = useSelector(
    (state) => state.publicReducer
  );

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  // fetch movie posters
  useEffect(() => {
    dispatch(
      moviePostersFetch(
        `${baseUrls.baseApi}movie/${id}/images?api_key=${baseUrls.apiKey}`
      )
    );
  }, [id, dispatch]);

  // fetch movie videos
  const handleMovieVideos = async () => {
    await dispatch(
      movieVideosFetch(
        `${baseUrls.baseApi}movie/${id}/videos?api_key=${baseUrls.apiKey}`
      )
    );

    setIsLoading(false);
  };

  return (
    <section className="custom-media-list pt-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="posters">
        <Row>
          {/* start nav tabs */}
          <Col sm={12} className="mb-3">
            <Nav variant="tabs" className="custom-nav-tabs">
              <h5 className="title mb-4">
                Media <FontAwesomeIcon icon={faChevronRight} />
              </h5>
              <Nav.Item className="ml-3">
                <Nav.Link eventKey="posters">
                  Posters {moviePosters.length}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="backdrops">
                  Backdrops {movieBackdrops.length}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Videos" onClick={handleMovieVideos}>
                  Videos {movieVideos.length || null}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          {/* end nav tabs */}

          {/* start tabs contents */}
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="posters">
                <div className="custom-list-inner pb-4">
                  {moviePosters.map((poster, index) => {
                    return (
                      <img
                        src={`${baseUrls.baseImageUrl}${poster.file_path}`}
                        style={{ width: "300px" }}
                        alt=""
                        key={index}
                      />
                    );
                  })}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="backdrops">
                <div className="custom-list-inner pb-4">
                  {movieBackdrops.map((img, index) => {
                    return (
                      <img
                        src={`${baseUrls.baseImageUrl}${img.file_path}`}
                        alt=""
                        key={index}
                      />
                    );
                  })}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Videos">
                <div className="custom-list-inner pb-4">
                  {isLoading ? (
                    <Loader />
                  ) : (
                    movieVideos.map((video, index) => {
                      return (
                        <iframe
                          key={index}
                          width="560"
                          height="315"
                          src={`${baseUrls.baseVideoUrl}${video.key}`}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                        ></iframe>
                      );
                    })
                  )}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          {/* end tabs content */}
        </Row>
      </Tab.Container>
    </section>
  );
};

export default MediaList;
