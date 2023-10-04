import React, { Component } from "react";
import Functional from "./Components/Functional";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  createStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };

  render() {
    console.log(this.state.students);
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <Functional createStudent={this.createStudent} />
          </Col>
          <Col xs={12} md={6}>
            happy
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
