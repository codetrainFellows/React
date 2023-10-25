import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import UpdateForm from "./UpdateForm";

function Student_card({ student, deleteStudent, upadateStudent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Name: {student.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Email: {student.email}
        </Card.Subtitle>
        <Card.Text>Gen: {student.gen}</Card.Text>
        <Card.Link onClick={handleShow}>Update</Card.Link>
        <Button
          variant="danger"
          onClick={() => {
            deleteStudent(student.id);
          }}
        >
          Delete
        </Button>
      </Card.Body>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateForm student={student} upadateStudent={upadateStudent} />
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default Student_card;
