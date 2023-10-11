import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Cards = ({ student }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Email: {student.email}</Card.Text>
        <Card.Text>Gen: {student.gen}</Card.Text>
        <Card.Text>Phone: {student.phone}</Card.Text>
        <Button variant="primary">Update</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
