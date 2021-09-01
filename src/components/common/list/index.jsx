import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CardMovie from "../../base/card-movie";
import "./style.scss";

const List = ({ title }) => {
  return (
    <section className="custom-list pt-5">
      <h5 className="title mb-4">
        <Link to="/">
          {title} <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </h5>
      <div className="custom-list-inner pb-4">
        {/* start card */}
        <CardMovie />
        {/* end card */}

        {/* start card */}
        <CardMovie />
        {/* end card */}

        {/* start card */}
        <CardMovie />
        {/* end card */}

        {/* start card */}
        <CardMovie />
        {/* end card */}

        {/* start card */}
        <CardMovie />
        {/* end card */}

        {/* start card */}
        <CardMovie />
        {/* end card */}

        {/* start card */}
        <CardMovie />
        {/* end card */}
      </div>
    </section>
  );
};

export default List;
