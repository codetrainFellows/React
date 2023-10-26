import React from "react";
import StudentCard from "./StudentCard";
import { Row, Col } from "react-bootstrap";
function StudentList(props) {
  //students props is an array
  //console.log(props.students);

  //arr=[1,2,3,4,5,5,3,6]
  //item=3

  return (
    <Row>
      {/* map method to display students in the state array */}
      {props.students.map((item) => {
        //item represent the value of out arr at each iteration
        return (
          <Col key={item.id}>
            <StudentCard
              student={item}
              deleteStudent={props.deleteStudent}
              updateStudent={props.updateStudent}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default StudentList;
