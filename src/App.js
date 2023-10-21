import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const addNewStudent = (student) => {
    setStudents([...students, student]);
  };
  //console.log(students);
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Forms</h1>
          <StudentForm addStudent={addNewStudent} />
        </Col>
        <Col>
          <h1>Cards</h1>
          <StudentList students={students} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
