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

  //function to delete data from our arrat using a unique id
  const deleteStudent = (personId) => {
    const filteredStudents = students.filter((item) => item.id !== personId);
    //filteredStudents is a new array containing students without the id provided
    setStudents(filteredStudents);
  };

  //function for update of student
  const updateStudent = (id, updateStudent) => {
    const updatedStudents = students.map((item) => {
      //cheack if student has same id
      if (item.id === id) {
        return updateStudent;
      }

      return item;
    });
    setStudents(updatedStudents);
  };

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
            <StudentList
              students={students}
              deleteStudent={deleteStudent}
              updateStudent={updateStudent}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
