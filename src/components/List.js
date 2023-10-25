import React from "react";
import Student_card from "./Student_card";
import { Row, Col } from "react-bootstrap";

function List({ students, deleteStudent, upadateStudent }) {
  return (
    <Row>
      {students.map((student, index) => {
        return (
          <Col>
            <Student_card
              student={student}
              deleteStudent={deleteStudent}
              upadateStudent={upadateStudent}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default List;
