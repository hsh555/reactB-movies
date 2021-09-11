import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
// styles
import "./style.scss";

const CardPeople = ({ person }) => {
  return (
    <div className="custom-card">
      <div className="custom-card-header">
        <img
          src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
          className="img-fluid"
          alt=""
        />
        <Badge pill text="white" className="custom-card-rate px-2">
          {person.popularity} <FontAwesomeIcon icon={faThumbsUp} />
        </Badge>
      </div>
      <div className="custom-card-footer">
        <h5>{person.name}</h5>
      </div>
    </div>
  );
};

export default CardPeople;
