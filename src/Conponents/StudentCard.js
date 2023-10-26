import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import UpdateForm from "./UpdateForm";
function StudentCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "16rem", marginTop: "2rem" }}>
        <Card.Body>
          <Card.Title> Name: {props.student.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Email: {props.student.email}
          </Card.Subtitle>

          <Card.Link onClick={handleShow}>Update</Card.Link>
          <Button
            variant="danger"
            onClick={() => {
              props.deleteStudent(props.student.id);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateForm
            student={props.student}
            updateStudent={props.updateStudent}
            close={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StudentCard;
