import React from "react";
import Card from "react-bootstrap/Card";

function StudentList(props) {
  console.log(props.students);
  return (
    <div>
      {props.students.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Name: {item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Email: {item.email}
              </Card.Subtitle>
              <Card.Text>Gen: {item.gen}</Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default StudentList;
