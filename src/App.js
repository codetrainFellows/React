import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Func from "./components/Func";
import List from "./components/List";
function App() {
  const [students, setStudents] = useState([]);

  //add new student to state
  const createStudent = (student) => {
    setStudents([...students, student]);
  };

  //delete student from arr
  const deleteStudent = (id) => {
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
  };

  //function to update student data
  const updateStudent = (id, updatedData) => {
    const updatedStudent = students.map((student) => {
      if (student.id === id) {
        return updatedData;
      }
      return student;
    });

    setStudents(updatedStudent);
  };

  console.log(students);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Func createStudent={createStudent} />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <List
            students={students}
            deleteStudent={deleteStudent}
            upadateStudent={updateStudent}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
