import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentForm from "./Conponents/StudentForm";
import StudentList from "./Conponents/StudentList";

function App() {
  //state to contain all students created
  const [students, setStudents] = useState([]);

  //spread operator ...
  //arr=[2,3,4,5,6]
  //...arr= 2,3,4,5,6

  //create func with parameter to pass data from form component to App component
  const addNewStudent = (student) => {
    //pass student into state
    setStudents([...students, student]);
  };
  //console.log(students);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Form</h1>
            <StudentForm addStudent={addNewStudent} />
          </Col>
          <Col>
            <h1>Cards</h1>
            <StudentList students={students} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
