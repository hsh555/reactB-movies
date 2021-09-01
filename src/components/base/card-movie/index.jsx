import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import poster from "../../../assets/images/p-1.jpg";
import "./style.scss";

const CardMovie = () => {
  return (
    <div className="custom-card">
      <div className="custom-card-header">
        <img src={poster} className="img-fluid" alt="" />
        <div className="custom-card-info">Comedy - War</div>
        <Badge pill text="white" className="custom-card-rate px-2">
          9.7 <FontAwesomeIcon icon={faThumbsUp} />
        </Badge>
      </div>
      <div className="custom-card-footer">
        <h5>Life is Beautiful</h5>
      </div>
    </div>
  );
};

export default CardMovie;
