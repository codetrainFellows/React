import React from "react";
import Student_card from "./Student_card";
import { Row, Col } from "react-bootstrap";

function List({ students }) {
  return (
    <Row>
      {students.map((student, index) => {
        return (
          <Col key={student.id}>
            <Student_card student={student} />
          </Col>
        );
      })}
    </Row>
  );
}

export default List;
