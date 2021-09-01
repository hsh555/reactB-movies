import { Col, Container, Row } from "react-bootstrap";
import AdvanceSearch from "../../components/common/advance-search";
import List from "../../components/common/list";

const HomePage = () => {
  return (
    <Container className="custom-container">
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
          <List title={"Popular Movies"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <List title={"New Movies"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <List title={"Top Rated Movies"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <List title={"UP Coming Movies"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <List title={"TV On The Air"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <List title={"TV Airing Today"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <List title={"Popular TV Shows"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <List title={"Top Rated TV Shows"} />
        </Col>
      </Row>
      {/* end lists */}
    </Container>
  );
};

export default HomePage;
