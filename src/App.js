import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Func from "./components/Func";

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
          <Col xs={12} md={6} lg={6}>
            <Func createStudent={this.createStudent} />
          </Col>
          <Col xs={12} md={6} lg={6}>
            Hello
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
