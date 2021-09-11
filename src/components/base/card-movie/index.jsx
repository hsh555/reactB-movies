import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import poster from "../../../assets/images/p-1.jpg";
import "./style.scss";

const CardMovie = ({ data, type }) => {
  const genres = useSelector((state) =>
    type === "tv"
      ? state.publicReducer.tvGenres
      : state.publicReducer.movieGenres
  );

  const getGenres = () => {
    const list = genres.filter((genre) => {
      for (const id of data.genre_ids) {
        if (id === genre.id) {
          return genre;
        }
      }
    });

    return list;
  };

  const genre = getGenres();

  return (
    <div className="custom-card" id={data.id}>
      <Link to={`/single/${data.id}`}>
        <div className="custom-card-header">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            className="img-fluid"
            alt=""
          />
          <div className="custom-card-info">
            {genre.map((genre) => `${genre.name} - `)}
          </div>
          <Badge pill text="white" className="custom-card-rate px-2">
            {data.vote_average} <FontAwesomeIcon icon={faThumbsUp} />
          </Badge>
        </div>
        <div className="custom-card-footer">
          <h5>{data.title || data.name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default CardMovie;
