import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import httpClient from "../../../http-client";
import CardMovie from "../../base/card-movie";
import "./style.scss";

const List = ({ title, infoList }) => {
  const { popularMoviesList } = useSelector((state) => state.publicReducer);

  const [list, setList] = useState([]);

  useEffect(() => {
    getFromApi();
  }, []);

  const getFromApi = async () => {
    const data = await httpClient(
      `https://api.themoviedb.org/3/${infoList.type}/${infoList.name}?api_key=9ebc8a9ee76ea9d34180fb6bb7b7ac14&language=en-US&page=1`
    );
    setList(data.results);
  };

  return (
    <section className="custom-list pt-5">
      <h5 className="title mb-4">
        <Link to={`${infoList.type}/${infoList.name}`}>
          {title} <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </h5>
      <div className="custom-list-inner pb-4">
        {/* start card */}
        {list.map((item) => {
          return <CardMovie data={item} />;
        })}
        {/* end card */}
      </div>
    </section>
  );
};

export default List;
