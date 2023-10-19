import React from "react";
import Card from "react-bootstrap/Card";
function StudentCard(props) {
  return (
    <div>
      <Card style={{ width: "16rem", marginTop: "2rem" }}>
        <Card.Body>
          <Card.Title> Name: {props.student.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Email: {props.student.email}
          </Card.Subtitle>

          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StudentCard;
