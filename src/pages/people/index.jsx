// // internal components
import CardPeople from "../../components/base/card-people";
import Loader from "../../components/common/loader";
// // external components
import { Col, Container, Row } from "react-bootstrap";

import React, { Component, useEffect, useRef, useState } from "react";
import axios from "axios";
import baseUrls from "../../utils/base-urls";
import { current } from "immer";
// import { Col } from "react-bootstrap";

// const ScrollComponent = () => {
//   const [people, setPeople] = useState([]);
//   const [page, setPage] = useState(1);
//   const [prevY, setPrevY] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const loadingRef = useRef(null);

//   useEffect(() => {
//     getPeople(page);
//     var options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 1.0,
//     };

//     const observer = new IntersectionObserver(
//       handleObserver,
//       options
//     );
//     observer.observe(loadingRef);
//   },[]);

//   const getPeople = (page) => {
//     setLoading(true);
//     axios
//       .get(
//         `${baseUrls.baseApi}person/popular?api_key=${baseUrls.apiKey}&language=en-US&page=${page}`
//       )
//       .then((res) => res.data)
//       .then((res) => {
//         setPeople((prevState) => [...prevState, ...res.results]);
//         setLoading(false);
//       });
//   };

//   const handleObserver = (entities, observer) => {
//     const y = entities[0].boundingClientRect.y;
//     if (prevY > y) {
//       const lastPerson = people.length - 1;
//       const curPage = lastPerson;

//       getPeople(curPage);
//       setPage(curPage);
//     }
//     setPrevY(y);
//   };

//   return (
//     <Container className="custom-container pt-5" id="moviesList">
//       <div style={{ minHeight: "800px" }}>
//         <Row>
//           {people.map((person) => {
//             return (
//               <Col sm={6} md={3} lg={2} className="custom-col">
//                 <CardPeople person={person} />
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//       <div
//         ref={loadingRef}
//         // style={loadingCSS}
//       >
//         <span>
//           <Loader />
//         </span>
//       </div>
//     </Container>
//   );
// };

class ScrollComponent extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      loading: false,
      page: 1,
      prevY: 0,
    };
  }

  componentDidMount() {
    this.getPeople(this.state.page);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const lastPerson = this.state.people.length - 1;
      const curPage = lastPerson;

      this.getPeople(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

  getPeople(page) {
    this.setState({ loading: true });
    axios
      .get(
        `${baseUrls.baseApi}person/popular?api_key=${baseUrls.apiKey}&language=en-US&page=${page}`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({ people: [...this.state.people, ...res.results] });
        this.setState({ loading: false });
        console.log(res.results);
      });
  }

  render() {
    // Additional css
    const loadingCSS = {
      height: "100px",
      margin: "30px",
    };

    // To change the loading icon behavior
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

    return (
      // <div className="container">
      <Container className="custom-container pt-5" id="moviesList">
        <div style={{ minHeight: "800px" }}>
          <Row>
            {this.state.people.map((person) => {
              return (
                <Col sm={6} md={3} lg={2} className="custom-col">
                  <CardPeople person={person} />
                </Col>
              );
            })}
          </Row>
        </div>
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>
            <Loader />
          </span>
        </div>
      </Container>
    );
  }
}

export default ScrollComponent;
