import React, { Component } from "react";
import Functional from "./Components/Functional";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import List from "./Components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        // { name: "habib", email: "hab@mail.com", phone: "98783729", gen: 23 },
        // { name: "Jerome", email: "hab@mail.com", phone: "98783729", gen: 23 },
        // { name: "Solomon", email: "hab@mail.com", phone: "98783729", gen: 23 },
        // { name: "Daniel", email: "hab@mail.com", phone: "98783729", gen: 23 },
      ],
    };
  }

  createStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };

  updateStudent = (id, updateData) => {
    let updatedData = this.state.students.map((student) => {
      if (id === student.id) {
        return updateData;
      }
      return student;
    });
    this.setState({ student: updatedData });
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
            <List students={this.state.students} update={this.updateStudent} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
