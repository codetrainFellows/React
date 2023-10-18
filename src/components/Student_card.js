import React from "react";
import { Card, Button } from "react-bootstrap";

function Student_card({ student }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Email: {student.email}</Card.Text>
        <Card.Text>Phone: {student.phone}</Card.Text>
        <Card.Text>Phone: {student.gen}</Card.Text>
        <Button variant="primary">Update</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Student_card;
